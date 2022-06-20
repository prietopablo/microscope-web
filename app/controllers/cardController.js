const cardDatamapper = require('../models/cardDatamapper');

const cardController = {

   async create (request, response) {

      try {
            
            await cardDatamapper.insert(request.body);
            // Check status code for error            
            return response.json({ Message: "Card creation succeed !"});

      } catch {
            return response.json({ errorMessage: "Card creation failed"});
      }
   }
}

module.exports = cardController;