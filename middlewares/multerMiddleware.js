const multer = require('multer');
const path = require('path');

//@Description: Multer storage and file checking configurations
const checkFileType = (file,cb)=>{
    const filetypes = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    const extname = (path.extname(file.originalname).toLowerCase()) === '.xlsx'?true:false;
    const mimetype = file.mimetype;
    
    if(extname && mimetype === filetypes){
        return cb(null, true)
    }else{
        cb(new Error(`Only .xlsx file can be uploaded`));
    }
};
  
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
        let fileExt = path.extname(file.originalname);
        let fileName = 'upload' + fileExt;
        cb(null, fileName);
    },
});
  
const upload = multer({
    storage: storage,
    fileFilter: function(req,file,cb){
      checkFileType(file,cb)
    }
});

module.exports={
    upload
}