const cardDatamapper = require('../../models/cardDatamapper');

const cardController = {

   async createPeriod (response, request) {

         try {
            await cardDatamapper.insert('period', request.body);

            // Check status code for error


            
            return response.json({ Message: "Card creation succeed !"});
      } catch {
            response.status(400).json({ errorMessage: "Card creation failed"})
      }
   }
}