

const conection = require('../helper/conection');
const GameModel = require('../model/Game');

class CreateGameService{

    async execute({id,pontuacao,erros}){

        const gameModel = new GameModel({pontuacao,erros,jogador_id:id});

        await conection('jogo').insert(gameModel);

        return true;
    }
    
}

module.exports = CreateGameService;