
const conection = require('../helper/conection');
const PlayerRepository = require('../repository/PlayerRepository');
const AppErrors = require('../errors/AppErrors.js');

const Player = new PlayerRepository();

module.exports = {
    async index(request,response){
        
        const players = await Player.findAll();

        return response.json(players);
    },
    async find(request,response){
       const { id } =  request.query;
        
       const player = await Player.findPlayerById(id);

       return response.json(player);

    }
    
}