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
      
      // We need to update data for each starting game relations
      // of course the "game" table but also "participation" and "palette"
      
      const gameData = request.body.game;
      const gameId = request.params.id;
      console.log("gameData", gameData);
      console.log("gameId", gameId);      

      await gameDatamapper.updateToStartGame(gameData, gameId);

      // When a game start insert every user participating with the related game.id
      // const players = [];      
      const playersData = request.body.players;
      // We have some problem working with await inside a forEach method
      // We need to convert our object inta an array to use the forEach method   
      dataPlayersId = Object.values(playersData);

     // console.log("playersData",playersData);

      // dataPlayersId.forEach(async (dataPlayerId) => {
      //    const player = playerDatamapper.insert(game.id, dataPlayerId);
      //    players.push(player);
      // });

      // We also need to loop with each palette card set with the new game
      const paletteCards = [];
      const paletteArray = Object.values(request.body.palette);
      //console.log("paletteArray", paletteArray);

      // paletteArray.forEach(paletteCard => {

      //    console.log(paletteCard.text, paletteCard.status);
      //    newPaletteCard = paletteDatamapper.insert(game.id, paletteCard);
      //    paletteCards.push(newPaletteCard);
      // });

      // // Check status code for error
      // if (!game && !players && paletteCards) {
      //    return response.status(400).json({ errorMessage: "No game created" })
      // }
      return response.json({ Message: "DONE"});
      // return response.json(game, players, paletteCards);
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