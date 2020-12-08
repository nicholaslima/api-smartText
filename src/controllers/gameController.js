
const conection = require('../helper/conection');
const GameRepository = require('../repository/GameRepository');
const PlayerRespository = require('../repository/PlayerRepository');
const CreateGameService = require('../service/CreateGameService');


const Game = new GameRepository();
const Player = new PlayerRespository();

module.exports = {
    
    async post(request,response){

        const { id }  = request.query;
        const { pontuacao, erros } = request.body;   

        const createGame = new CreateGameService();

        const pontuacaoNumber = parseInt(pontuacao,10);
        const errosNumber = parseInt(erros,10);

        const data = {
            id,
            pontuacao: pontuacaoNumber,
            erros: errosNumber,
        }

        await createGame.execute(data);

        return response.json({
            message: 'game inserido com sucesso'
        });
    },

    async index(request,response,next){
       
        const games = await Game.findAll();

        const list = games.sort((a ,b) => {
            return b.pontuacao - a.pontuacao;
        });
        
        return response.json(list);
    },

    async gamesPlayer(request,response,next){
        const { id }  = request.query;

        await Player.findPlayerById(id);

        const games = await Game.findByPlayer(id);

        return response.json(games);
    }
}