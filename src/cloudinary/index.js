const cloudinary = require('cloudinary').v2;  
const  {CloudinaryStorage}  = require('multer-storage-cloudinary');


cloudinary.config({
    cloud_name: 'dwtrvzpky',
    api_key: '221956492483197',
    api_secret: 'dq3SgsIFr-QObezDRdMPIXr5qVQ',
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