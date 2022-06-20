const cardDatamapper = require('../models/cardDatamapper');

const cardController = {

   async create (request, response) {

      try {
            
            await cardDatamapper.insert(request.body, request.params.id);
            // Check status code for error            
            response.json({ Message: "Card creation succeed !"});

      } catch (error) {
            response.json({ error, errorMessage: "Card creation failed"});
      }
   }
}

module.exports = cardController;