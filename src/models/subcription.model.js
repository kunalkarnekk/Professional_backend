import mongoose, { Schema } from 'mongoose';

const subcriptionSchema = new Schema({
        subscriber : {
            type: Schema.Types.ObjectId,
            ref :"User"
        },
        channle :{
            type:Schema.Types.ObjectId,
            ref:"User"
        }
}, {timestamps:true})




export const Subcription = mongoose.model("Subcription" , subcriptionSchema)