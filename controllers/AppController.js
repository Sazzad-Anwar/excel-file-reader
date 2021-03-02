//@Description:Controller for main application
const asyncHandler = require('express-async-handler');
const readXlsxFile = require('read-excel-file/node');
const { response,pagination,localTimeString } = require('../middlewares/middlewares');
const path = require('path');
const fs = require('fs');
const htmlDoc = require('html-docx-js');

const home = asyncHandler(async(req,res)=>{
    
    const file = req.file;
    
    if(file){
        let directory = path.join(__dirname, '../public/uploads/', `upload.xlsx`);
        readXlsxFile(directory).then((rows) => {
            
            const tableFormation = `<table><tbody>${rows.map((data) => `<tr>${data.map((singleData) =>`<td>${singleData}</td>`)}</tr>`)}</tbody></table>`;
            const table = (tableFormation.split(',')).join('');

            const docx = htmlDoc.asBlob(table);
            fs.writeFile(path.join(__dirname, '../public/uploads/', `document_file.docx`), docx, (err) => {
                if (err) return console.log(err);
                console.log('done');
            });

            let data ={
                'data':'hello',
                table,rows
            }
            res.json(response(true,200,"Success",data));
        })
    }


});


module.exports ={
    home
}