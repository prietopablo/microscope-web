const userDatamapper = require('../models/userDatamapper');
const auth = require('../middlewares/authUser');


module.exports = async (request, response, next) => {
   try {
      
      const players = await userDatamapper.findByGameId(request.params.id);

      players.forEach(player => {
        if (player.player_id === response.locals.userIdRetrieved) {
         response.json({ Message: "Access granted" });
        }
      });

      // response.json({ Message: "Access granted" });
      // console.log("Access granted");

      next();
   }
   catch (err) {
      //response.json({ errorType: err.message, errorMessage: "Access denied" });
   }
}