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

         const game = await gameDatamapper.findByCreatorId(userId);

         return response.json({ Message: `New game created by ${creator.username} !`, gameId: game.id });
      } catch (err) {
         response.json({ errorType: err.message });
     }
   },

   async deployGame (request, response) {
      
      try {
         // We need to update data for each starting game relations
         // Of course the "game" table but also "participation" and "palette"    
         const gameData = request.body.game;
         const gameId = request.params.id; 

         await gameDatamapper.updateGame(gameData, gameId);

         // When a game start insert every user participating with the related "game".id
         // We need to extract the "user".id who will play for this game         
         
         // As a work around for the absence of socketio we will be presented with the usernames of the users participating to the game
         // So the data about user.id will not be in the request.body. It will contain usernames instead
         //const dataPlayersId = Object.values(request.body.players);

         const dataPlayersUsername = request.body.players;
         // We need need to increment players position, beginning by creator who will serve as the firs player
         let position = 1;

         dataPlayersUsername.forEach(async (dataPlayerUsername) => {

            const player = await playerDatamapper.findByUsername(dataPlayerUsername);

            if (player) {
               
               const playerId = player.id;

               playerDatamapper.insert(gameId, playerId, position);
               position++;
            }
         });

         // A similar loop is needed for inserting every palette shade i.e. themes to include or exclude from the game
         const paletteArray = Object.values(request.body.palette);

         paletteArray.forEach(async (paletteCard) => {
            paletteDatamapper.insert(gameId, paletteCard);         
         });
      
         return response.json({ Message: "game deployed successfully !" });

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

   async endGame (request, response) {

      try {
         const gameToArchive = request.params.id;
         await gameDatamapper.updateGame({ state: "archived"}, gameToArchive);
         return response.json({Message: "Success ! Game Archived !"});

      } catch (err){
         response.json({ errorType: err.message });
      }
      
   },

   async getAllArchived (_, response) {

      try { 
         const archivedList = await gameDatamapper.findAllArchived();
         return response.json({ archivedList });

     } catch (err){
         response.json({ errorType: err.message });
     }
   },

   async getOneArchived (request, response) {
      // This method will retrieve a game as an all, which every data connected to the a game
      // It will be used to display ongoing games and archived ones
      try {

         // The game object will find all the data contained in the "game" table
         const game = await gameDatamapper.findByPk(request.params.id);

         if (game.state !== "archived") {
            response.json({ Message: "Game not archived !"});
         }

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
   }
}

module.exports = gameController;