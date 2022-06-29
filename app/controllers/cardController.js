const cardDatamapper = require('../models/cardDatamapper');

const cardController = {

   async createCard (request, response) {
      
      try {

            if(request.body.cardType === "focus") {

                  const focusFound = await cardDatamapper.findFocusByGameId(request.params.id);

                  if (focusFound) {
                        position = focusFound[focusFound.length - 1].position + 1;
                  }
                  else {
                        position = 1;
                  }

                  await cardDatamapper.insertFocus(request.body, position, request.params.id);
                        
                  return response.json({ Message: "Focus creation succeed !"});

            }
            else {
                  const cardsToMove = await cardDatamapper.findAllByPosition(request.body);
            
                  if (cardsToMove) {
                        
                        for (let i = 0; i < cardsToMove.length; i++) {
                              await cardDatamapper.updatePosition(request.body.cardType, cardsToMove[i].id, cardsToMove[i].position + 1);
                        }                                    
                  }
                  
                  await cardDatamapper.insert(request.body);
                  // Check status code for error            
                  return response.json({ Message: "Card creation succeed !"});
            } 
      } catch (err) {
            return response.json({errorType: err.message, errorMessage: "Card creation failed"});
      }
   },
}

module.exports = cardController;