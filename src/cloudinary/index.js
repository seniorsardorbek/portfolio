const cloudinary = require('cloudinary').v2;  
const  {CloudinaryStorage}  = require('multer-storage-cloudinary');
const config = require('../shared/config');


cloudinary.config({
    cloud_name: config.cloud.name,
    api_key: config.cloud.key,
    api_secret: config.cloud.secret,
  });
  

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'uploads',
        allowedFormats: ['jpeg', 'png', 'jpg']
    }
})

module.exports = {
    cloudinary, 
    storage
}