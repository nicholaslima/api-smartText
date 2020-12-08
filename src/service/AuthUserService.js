

const conection = require('../helper/conection');
const AppError = require('../errors/AppErrors');
const userRepository = require('../repository/PlayerRepository');
const { response } = require('express');
const { compare } = require('bcryptjs');
const { sign } = require('jsonwebtoken');
const { Jwt } = require('../config/jwt');


class AuthUserService{

   async execute({ email,senha }){

        const UserRepository = new userRepository();

        const user  =  await UserRepository.findPlayerByEmail(email);
  
       const auth =  await compare(senha,user.senha);
        
       if(!auth){
          throw new AppError('algo errado no email ou senha',401);
       }

       const token = sign({},Jwt.secret,{
           expiresIn: Jwt.validate,
           subject: user.email,
       });

       delete user.senha;

       return { token,user };
    }
}

module.exports = AuthUserService;