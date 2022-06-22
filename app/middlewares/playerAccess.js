const userDatamapper = require('../models/userDatamapper');
const auth = require('../middlewares/auth');


module.exports = async (request, response, next) => {
   try {

      console.log("response.locals.userIdRetrievedPlayerACCESS", response.locals.userIdRetrieved);
      
      const players = await userDatamapper.findByGameId(request.params.id);
      players.forEach(player => {
        if (player.id === response.locals.userIdRetrieved) {

        }
      });

      response.json({ Message: "Access granted" });

      next();
   }
   catch (err) {
      //response.json({ errorType: err.message, errorMessage: "Access denied" });
   }
}