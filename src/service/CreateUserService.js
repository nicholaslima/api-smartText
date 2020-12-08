

const banco = require('../helper/conection');
const playerRepository = require('../repository/PlayerRepository');

const { hash } = require('bcryptjs');

class CreateUserService{


    async execute({ email,senha,nome,idade,sexo }){

       const player = new playerRepository();

        await player.playerExist(email);

        const passwordHash = await hash(senha,8);

        await player.createPlayer({ email,passwordHash,nome,idade,sexo });

        return { email,nome }
    }
}

module.exports = CreateUserService;