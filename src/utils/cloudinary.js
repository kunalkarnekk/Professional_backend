import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDONARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;

        // Upload the file to Cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto'
        });

        // File has been uploaded successfully
        console.log('File is uploaded on Cloudinary:', response.url);

        // Remove the locally saved temporary file after successful upload
        fs.unlinkSync(localFilePath);

        return response; // Return Cloudinary response

    } catch (error) {
        // Remove the locally saved temporary file as the upload operation failed
        fs.unlinkSync(localFilePath);
        
        return null; // Return null in case of an error
    }
};

// const uploadOnCloudinary = async (localFilePath) => {
//     try {
//       if (!localFilePath) return null;
  
//       const response = await cloudinary.uploader.upload(localFilePath, {
//         resource_type: 'auto'
//       });
  
//       console.log('File uploaded successfully:', response.url);
//       fs.unlinkSync(localFilePath); // Remove the temporary file after successful upload
  
//       return response; // Return Cloudinary response
//     } catch (error) {
//       console.error('Error uploading to Cloudinary:', error);
//       fs.unlinkSync(localFilePath); // Remove the temporary file if upload failed
  
//       return null; // Return null in case of an error
//     }
//   };
  

export {uploadOnCloudinary}