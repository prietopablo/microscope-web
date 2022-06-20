const cardDatamapper = require('../models/cardDatamapper');

const cardController = {

   async create (request, response) {

      try {
            //console.log("request.body", request.body);

            // First, we need to find if there is a previous_card_position
            // we will use the findByPosition            
            const cardsToMove = await cardDatamapper.findByPosition(request.body);
            //console.log("cardsToMove", cardsToMove);


            if (cardsToMove) {
                  let newcardPosition = request.body.previous_card_position + 1;

                  for (let i = 0; i < cardsToMove.length; i++) {
                        await cardDatamapper.updatePosition(request.body.cardType, cardsToMove[i].id, cardsToMove[i].position + 1);
                  }
                  // cardsToMove.forEach( async (card) => {
                  //       newcardPosition + 1;
                  //       console.log("newcardPosition", newcardPosition);
                  //       await cardDatamapper.updatePosition(request.body.cardType, card.id, newcardPosition);
                  // });
                  
            }
            // while (cardInDesiredPosition) {
            //       await cardDatamapper.updatePosition(cardInDesiredPosition, request.body.cardType);
                  
            //       const newcard = {
            //             cardType: request.body.cardType, index,
            //             parentType: request.body.parentType,
            //             parentId: parent.id,
            //             previous_card_position: parent.postion
            //       };

            //       cardInDesiredPosition = await cardDatamapper.findByPosition(newcard);
            // }
            console.log("postwhile");
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