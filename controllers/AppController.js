//@Description:Controller for main application
const asyncHandler = require('express-async-handler');
const readXlsxFile = require('read-excel-file/node');
const { response,pagination,localTimeString } = require('../middlewares/middlewares');
const path = require('path');

const home = asyncHandler(async(req,res)=>{
    
    const file = req.file;
    
    if(file){
        let directory = path.join(__dirname, '../public/uploads/', `upload.xlsx`);
        readXlsxFile(directory).then((rows) => {
    
            let data ={
                'data':'hello',
                rows
            }
            res.json(response(true,200,"Success",data));
        })
    }


});


module.exports ={
    home
}