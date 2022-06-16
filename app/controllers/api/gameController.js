const gameDatamapper = require('../../models/gameDatamapper');
const playerDatamapper = require('../../models/playerDatamapper');
const paletteDatamapper = require('../../models/paletteDatamapper');
const userDatamapper = require('../../models/userDatamapper');


const gameController = {

   async createNewGame (request, response) {

      await gameDatamapper.insertCreator(request.body);
      
      // findByPk method expect a variable named userId
      const userId = request.body.creator_id;
      const creator = await userDatamapper.findByPk(userId);

      return response.status(200).json(`New game created by ${creator.username} !`);

   },

   async deployGame (request, response) {
      
      // We need to insert data for each starting game relations
      // of course the "game" table but also "participation" and "palette"

      const data = request.body;

      const game = await gameDatamapper.insert(data);

      console.log("game", game);

      // When a game start insert every user participating with the related game.id
      const players = [];
      
      const dataPlayers = data.players_id;

      // We have some problem working with await inside a forEach method
      // We need to convert our object inta an array to use the forEach method
   
      dataPlayersId = Object.values(dataPlayers);

      console.log("dataPlayersId",dataPlayersId);

      dataPlayersId.forEach(async (dataPlayerId) => {
         const player = playerDatamapper.insert(game.id, dataPlayerId);
         players.push(player);
      });

      // We also need to loop with each palette card set with the new game
      const paletteCards = [];
      const palette = request.body.palette;

      // palette.forEach(paletteCard => {
      //    const newPaletteCard = paletteDatamapper.insert(game.id, paletteCard);
      //    paletteCards.push(newPaletteCard);
      // });

      // Check status code for error
      if (!game && !players && paletteCards) {
         return response.status(400).json({ errorMessage: "No game created" })
      }

      return response.json(game, players, paletteCards);
   },

   async getOne (request, response) {
      console.log(request.params.id);
      const game = await gameDatamapper.findByPk(request.params.id);
      
      if (!game) {
         return response.status(404).json({ errorMessage: "no game found"});
      }

      return response.status(200).json({ game });
  }
}

module.exports = gameController;