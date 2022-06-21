const cardDatamapper = require('../models/cardDatamapper');

const cardController = {

   async createCard (request, response) {

      try {
                     
            const cardsToMove = await cardDatamapper.findAllByPosition(request.body);
            
            if (cardsToMove) {
                  console.log("cardsToMove found", cardsToMove);
                  for (let i = 0; i < cardsToMove.length; i++) {
                        await cardDatamapper.updatePosition(request.body.cardType, cardsToMove[i].id, cardsToMove[i].position + 1);
                  }                                    
            }
            
            await cardDatamapper.insert(request.body);
            // Check status code for error            
            return response.json({ Message: "Card creation succeed !"});
      
      } catch (err) {
            return response.json({errotType: err.message, errorMessage: "Card creation failed"});
      }
   },

   async createFocus (request, response) {

      try {
            await cardDatamapper.insertFocus(request.body);         
            console.log(request.body);
            
            return response.json({ Message: "Focus creation succeed !"});
      
      } catch (err) {
            return response.json({errotType: err.message, errorMessage: "Focus creation failed"});
      }
   }
}

module.exports = cardController;