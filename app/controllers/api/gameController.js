const gameDatamapper = require('../../models/gameDatamapper');

const cardController = {

   async createGame (response, request) {

      const period = await gameDatamapper.insert(request.body);

      // Check status code for error
      if (!period) {
         return response.status(400).json({ errorMessage: "No game created" })
      }

      return response.json(period);
   }
}
