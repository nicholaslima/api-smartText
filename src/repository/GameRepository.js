const conection = require('../helper/conection.js');
const AppError = require('../errors/AppErrors');

class GameRepository {

    async findAll(){
        const games = await conection('jogo').select('*').join('jogador','jogador.id','=','jogo.jogador_id');

        for (const game of games) {
            delete game.senha;
        }

        return games;
    }
    async findByPlayer(id){
        
        const games = await conection('jogo')
                        .where('jogador_id',id)
                        .select('*');

        const [gamesExists] = games;

        if(!gamesExists){
           throw new AppError('este jogador não tem jogos',400);
        }

        return games;
    }
}

module.exports = GameRepository;