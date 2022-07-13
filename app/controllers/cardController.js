const cardDatamapper = require('../models/cardDatamapper');

const periodDatamapper = require('../models/periodDatamapper');
const eventDatamapper = require('../models/eventDatamapper');
const sceneDatamapper = require('../models/sceneDatamapper');
const focusDatamapper = require('../models/focusDatamapper');

const cardController = {

   async createCard (request, response) {
      
      try {

            // Focus card have incremental position so no need to change positions
            // Other need to detect positions, because the player can choose to put a card before one already created

            if(request.body.cardType === "focus") {

                  const focusFound = await focusDatamapper.findByGameId(request.params.id);
                  let position;
                  if (focusFound) {                        
                        position = focusFound[focusFound.length - 1].position + 1;
                  }
                  else {
                        position = 1;
                  }
                  const focus = await focusDatamapper.insert(request.body, position, request.params.id);                        
                  return response.json({ Message: "Focus creation succeed !", focus});
            }
            else {
                  // SOC distribution
                  const cardsToMove = {};

                  if(data.cardType === "period") {
                        cardsToMove = await periodDatamapper.findAllByPosition(request.body);
                  }
                  else if (data.cardType === "event") {
                        cardsToMove = await eventDatamapper.findAllByPosition(request.body);
                  }
                  else if (data.cardType === "scene"){
                        cardsToMove = await sceneDatamapper.findAllByPosition(request.body);
                  }
            
                  if (cardsToMove) {
                        // SOC distribution
                        if (request.body.cardType === "period") {
                              for (let i = 0; i < cardsToMove.length; i++) {
                                    await periodDatamapper.updatePosition(cardsToMove[i].id, cardsToMove[i].position + 1);
                              }   
                        }
                        else if (request.body.cardType === "event") {
                              for (let i = 0; i < cardsToMove.length; i++) {
                                    await eventDatamapper.updatePosition(cardsToMove[i].id, cardsToMove[i].position + 1);
                              }   
                        }
                        else if (request.body.cardType === "scene") {
                              for (let i = 0; i < cardsToMove.length; i++) {
                                    await sceneDatamapper.updatePosition(cardsToMove[i].id, cardsToMove[i].position + 1);
                              } 
                        }                                   
                  }

                  const card = {};

                  if (request.body.cardType === "period") {
                        card = await periodDatamapper.insert(request.body);
                  }
                  if (request.body.cardType === "period") {
                        card = await eventDatamapper.insert(request.body);
                  }
                  if (request.body.cardType === "period") {
                        card = await sceneDatamapper.insert(request.body);
                  }
                  // Check status code for error            
                  return response.json({ Message: `${request.body.cardType} creation succeed !`, card});
            } 
      } catch (err) {
            return response.json({errorType: err.message, errorMessage: "Card creation failed"});
      }
   },
}

module.exports = cardController;