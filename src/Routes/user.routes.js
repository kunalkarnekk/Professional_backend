import { Router } from "express";
import { loginUser, logoutUser, refreshToken, registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewates/multer.middleware.js";
import { verifyJWT } from "../middlewates/auth.middleware.js";
const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
);

router.route('/login').post(loginUser);

//secured routes

router.route('/logout').post( verifyJWT , logoutUser);
router.route('/refresh-token').post(refreshToken);

export default router;