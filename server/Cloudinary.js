import cloudinary from'cloudinary'
import dotenv from "dotenv"

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API-SECRET
})
exports.uploads=(file,folder)=>{
    return new Promise(resolve=>{
        cloudinary.UploadStream.upload(file,(result)=>{
            resolve({
                url:result.url,
                id:result.public_id

            })
        
        })
        
    }
}