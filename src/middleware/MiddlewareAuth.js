

const AppError = require('../errors/AppErrors');
const { verify } = require('jsonwebtoken');
const { Jwt } = require('../config/jwt');

module.exports = (request,response,next) => {

    const token = request.headers.authorization;
    
    if(!token){
        throw new AppError('faltando token',400);
    }

    try{
        const validate = verify(token,Jwt.secret);
        const { sub } = validate;

        request.user = {
            iduser: sub
        }

        return next();
    }catch(error){
        throw new AppError('usuario não autenticado',400);
    }
}