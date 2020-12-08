
const AppErrors = require('../errors/AppErrors');

module.exports = (error,request,response,next) => {
    console.log(error);
 
    if(error instanceof AppErrors){
        return response.status(error.error).json({
            error: error.mensagem
        });
    }

    console.log(error);
       
    return response.status(500).json({
        message: error.message
    });
}