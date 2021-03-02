const winston = require('winston');
const { combine,label,timestamp, prettyPrint } = winston.format;


exports.response = (isSuccess, code, message, body) =>{
    return {data:body,isSuccess:isSuccess,code:code,message:message};
};

//Description: Send the organized readable time string
exports.localTimeString = (time)=>{
    return new Date(time).toLocaleString('en-US',{weekday: 'short', year: 'numeric', month: 'short', day: 'numeric',hour:'2-digit',minute:'2-digit'});
};

//Description: Check the input variables is empty or not
exports.isEmpty = value =>value === undefined || value === null || (typeof value === 'object' && Object.keys(value).length === 0) || (typeof value === 'string' && value.trim().length === 0) ? true: false;

//Description: Handle the error and throw the error in API response instead crashing the applicaiton
exports.errorHandler =  (err,req,res,next)=>{
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    console.log(err);
    if(err){
        this.logger(err.message,err.stack,req.ip)
        res.json({
          message: err.message,
          isSuccess: false,
          code: statusCode,
          stack: process.env.NODE_ENV === 'production' ? null: err.stack
        });
    }else{
        next();
    }
};

//Description: Show an error message on API response if the route is not defined
exports.notFound =  (req,res,next)=>{
    const error = new Error(`${req.originalUrl} Not Found`);
    res.status(404);
    next(error);
};

//Descirption: pagination
exports.pagination=(model,page,limit,model_name)=>{
    page = parseInt(page);
    limit = parseInt(limit);

    const showPerPage = Math.ceil(model.length/limit);
    let result ={};

    if(page && limit){
        const startIndex = (page - 1)*limit;
        const endIndex = page*limit;

        if(endIndex < model.length){
            result.next = {
                page: page+1,
                limit:limit,
            }            
        }
        if(startIndex > 0){
            result.previous={
                page:page -1,
                limit:limit
            }
        }
        result.total_page= showPerPage;
        result.total_length=model.length
        result.current_page=page;
        result[model_name] = model.slice(startIndex,endIndex);
        return result;
    }
    else{
        result.result = model;
        return result;
    }
};


//Description: Print the error on the error.log page for production
const logger = winston.createLogger({
    level: 'error',
    format: combine(
        // label(),
        timestamp(),
        prettyPrint()
    ),
    // defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.File({ filename: 'error.log' })
    ]
});

exports.logger = (error,stack,IP)=>{
logger
    .log({
        level: 'error',
        message:error,
        IP,
        stack,
        error_occured:new Date().toLocaleString('en-US',{weekday: 'short', year: 'numeric', month: 'short', day: 'numeric',hour:'2-digit',minute:'2-digit'})
    });
}