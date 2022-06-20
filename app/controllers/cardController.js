const cardDatamapper = require('../models/cardDatamapper');

const cardController = {

   async create (request, response) {

      try {
            console.log(request.body);

            // First, we need to find if there is a previous_card_position
            // we will use the findByPosition            
            const cardInDesiredPosition = await cardDatamapper.findByPosition(request.body);
            console.log("parent", parent);

            while (cardInDesiredPosition) {
                  await cardDatamapper.updatePosition(parent, request.body.cardType);
                  
                  const newcard = {
                        cardType: request.body.cardType, index,
                        parentType: request.body.parentType,
                        parentId: parent.id,
                        previous_card_position: parent.postion
                  };

                  cardInDesiredPosition = await cardDatamapper.findByPosition(newcard);
            }
            console.log("postwhile");
            await cardDatamapper.insert(request.body);
            // Check status code for error            
            return response.json({ Message: "Card creation succeed !"});

      } catch {
            return response.json({ errorMessage: "Card creation failed"});
      }
   }
}

module.exports = cardController;