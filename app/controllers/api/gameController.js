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
      
      try {
         // We need to update data for each starting game relations
         // of course the "game" table but also "participation" and "palette"      
         const gameData = request.body.game;
         const gameId = request.params.id;  

         await gameDatamapper.updateToStartGame(gameData, gameId);

         // When a game start insert every user participating with the related game.id    
         const playersData = request.body.players;
         // We have some problem working with await inside a forEach method
         // We need to convert our object inta an array to use the forEach method   
         dataPlayersId = Object.values(playersData);

         console.log("playersData",playersData);
         // We need need to pass also positions on the game tabletop starting with the first player
         let position = 1;
         dataPlayersId.forEach(async (dataPlayerId) => {
            playerDatamapper.insert(gameId, dataPlayerId, position);
            position++;
         });

         // We also need to loop with each palette card set with the new game
         const paletteArray = Object.values(request.body.palette);

         paletteArray.forEach(async (paletteCard) => {
            console.log(paletteCard.text, paletteCard.status);
            paletteDatamapper.insert(gameId, paletteCard);         
         });
      
         return response.json({ Message: "game started successfully !"});

      } catch (error) {
         return response.status(400).json({ errorMessage: "game not started"});
      } 
   },

   async getOne (request, response) {
      const game = await gameDatamapper.findByPk(request.params.id);
      
      if (!game) {
         return response.status(404).json({ errorMessage: "no game found"});
      }

      return response.status(200).json({ game });
   },

   async getAll (request, response) {
      //const gamesArchived
   }
}

module.exports = gameController;