const gameDatamapper = require('../../models/gameDatamapper');
const playerDatamapper = require('../../models/playerDatamapper');
const paletteDatamapper = require('../../models/paletteDatamapper')


const gameController = {

   async createGame (response, request) {

      // We need to insert data for each starting game relations
      // of course the "game" table but also "participation" and "palette"

      const game = await gameDatamapper.insert(request.body);

      // When a game start insert every user participating with the related game.id
      const players = [];
      const playersId = request.body.playersId;

      playersId.forEach(playerId => {
         const player = await playerDatamapper.insert(game.id, playerId);
         players.push(player);
      });

      // We also need to loop with each palette card set with the new game
      const paletteCards = [];
      const palette = request.body.palette

      palette.forEach(paletteCard => {
         const paletteCard = await paletteDatamapper.insert(game.id, paletteCard);
         paletteCards.push(paletteCard);
      });

      // Check status code for error
      if (!game && !players && paletteCards) {
         return response.status(400).json({ errorMessage: "No game created" })
      }

      return response.json(game, players, paletteCards);
   }
}

module.exports = gameController;