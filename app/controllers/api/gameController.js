const gameDatamapper = require('../../models/gameDatamapper');
const playerDatamapper = require('../../models/playerDatamapper');
const paletteDatamapper = require('../../models/paletteDatamapper')


const gameController = {

   async createGame (request, response) {
<<<<<<< HEAD
      console.log(request.body);
=======
      
>>>>>>> c4f3c66644442602093dd5690a6913c160b7ccf1
      // We need to insert data for each starting game relations
      // of course the "game" table but also "participation" and "palette"
      console.log("request.body", request.body);

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
      const palette = request.body.palette

      // palette.forEach(paletteCard => {
      //    const newPaletteCard = paletteDatamapper.insert(game.id, paletteCard);
      //    paletteCards.push(newPaletteCard);
      // });

      // Check status code for error
      if (!game && !players && paletteCards) {
         return response.status(400).json({ errorMessage: "No game created" })
      }

      return response.json(game, players, paletteCards);
   }
}

module.exports = gameController;