const cardDatamapper = require('../../models/cardDatamapper');

const cardController = {
   async createPeriod (response, request) {

      const period = await cardDatamapper.insert(request.body, 'period');

      // Check status code for error
      if (!period) {
         return response.status(400).json({ errorMessage: "No period card parsed" })
      }

      return response.json(period);
   }
}