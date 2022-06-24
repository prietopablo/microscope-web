const gameDatamapper = require('../models/gameDatamapper');
const playerDatamapper = require('../models/playerDatamapper');
const paletteDatamapper = require('../models/paletteDatamapper');
const userDatamapper = require('../models/userDatamapper');
const cardDatamapper = require('../models/cardDatamapper');


const gameController = {

   async createNewGame (request, response) {
      // We create a game just by creating row in our database, with its key and the creator one. We will update all the details with the deployGame method
      try {
         await gameDatamapper.insertCreator(request.body);

         const userId = request.body.creator_id;
         const creator = await userDatamapper.findByPk(userId);

         return response.status(200).json(`New game created by ${creator.username} !`, game_id);
      }
      catch (err){
         response.json({ errorType: err.message });
     }

   },

   async deployGame (request, response) {
      
      try {
         // We need to update data for each starting game relations
         // Of course the "game" table but also "participation" and "palette"    
         const gameData = request.body.game;
         const gameId = request.params.id; 

         await gameDatamapper.updateToStartGame(gameData, gameId);

         // When a game start insert every user participating with the related "game".id
         // We need to extract the "user".id who will play for this game                     
         const dataPlayersId = Object.values(request.body.players);

         // We need need to increment players position, beginning by creator who will serve as the firs player
         let position = 1;
         dataPlayersId.forEach(async (dataPlayerId) => {
            playerDatamapper.insert(gameId, dataPlayerId, position);
            position++;
         });

         // A similar loop is needed for inserting every palette shade i.e. themes to include or exclude from the game
         const paletteArray = Object.values(request.body.palette);

         paletteArray.forEach(async (paletteCard) => {
            paletteDatamapper.insert(gameId, paletteCard);         
         });
      
         return response.json({ Message: "game deployed successfully !"});

      } catch (err) {
         return response.json({ errorLog: err.message, errorMessage: "Unable to deploy the game!" });
      } 
   },

   async getOne (request, response) {
      // This method will retrieve a game as an all, which every data connected to the a game
      // It will be used to display ongoing games and archived ones
      try {

         // The game object will find all the data contained in the "game" table
         const game = await gameDatamapper.findByPk(request.params.id);

         // The player object will retrieve data in the "participation" table
         const players = await userDatamapper.findByGameId(request.params.id);

         const focuses = await cardDatamapper.findFocusByGameId(request.params.id);

         // The period object is composed of period of our game and each subsequent event which also reach to related scenes
         const periods = await cardDatamapper.findPeriodByGameId(request.params.id);

         if (periods) {
         
            for (let i = 0; i < periods.length; i++) {

               const eventsFound = await cardDatamapper.findEventByPeriodId(periods[i].id);

               if (eventsFound) {
                  
                  for (let j = 0; j < eventsFound.length; j++) {

                     const scenesFound = await cardDatamapper.findSceneByEventId(eventsFound[j].id);

                     if (scenesFound) {
                        eventsFound[j].scenes = scenesFound;
                     }
                  }
                  periods[i].events = eventsFound;
               }
            }
         }

         return response.json({ game, players, focuses, periods });
         
      } catch (err) {
         return response.json({ errorType: err.message, errorMessage: "Failed to find game"});
      }
   },

   async getAllArchived (_, response) {

      try { 
         const archivedList = await gameDatamapper.findAllArchived();
         return response.json({ archivedList });
     }
     catch (err){
         response.json({ errorType: err.message });
     }
   }
}

module.exports = gameController;