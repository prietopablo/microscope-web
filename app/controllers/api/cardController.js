const cardDatamapper = require('../../models/cardDatamapper');

const cardController = {

   async createCard (response, request) {

      try {
         await cardDatamapper.insert('period', request.body);

         return response.status(200).json({ errorMessage: "Card created !" });
         
         } catch (error) {
            return response.status(400).json({ error, errorMessage: "No period card parsed" });
         }
   }
}