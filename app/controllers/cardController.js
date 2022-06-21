const cardDatamapper = require('../models/cardDatamapper');

const cardController = {

   async create (request, response) {

      try {
                      
            const cardsToMove = await cardDatamapper.findAllByPosition(request.body);
            
            if (cardsToMove) {
                  let newcardPosition = request.body.previous_card_position + 1;

                  for (let i = 0; i < cardsToMove.length; i++) {
                        await cardDatamapper.updatePosition(request.body.cardType, cardsToMove[i].id, cardsToMove[i].position + 1);
                  }                  
            }

            await cardDatamapper.insert(request.body);
            // Check status code for error            
            return response.json({ Message: "Card creation succeed !"});

      // } catch (err) {
      } catch (err) {
            // return response.json({ errorMessage: "Card creation failed"});
            return response.json(err.message);
      }
   }
}

module.exports = cardController;