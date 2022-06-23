const jwt = require("jsonwebtoken");
const userDatamapper = require("../models/userDatamapper");

module.exports = async (request, response, next) => {
   try { 

      const token = request.headers.authorization.split(' ')[1];

      const decodedToken = jwt.verify(token, process.env.TOKEN_KEY);      

      const userId = decodedToken.userId;
      console.log("userId", userId);
      // Problem here
      console.log("request.params.id", request.params.id);
      const players = await userDatamapper.findByGameId(request.params.id);
      console.log("players", players);
      if (players) {
         for (let i = 0; i < players.length; i++) {
            
            if (players[i].player_id === userId) {
               next();
               break;
            }  
         }      
      }
   }
   catch (err) {

      response.json({ errorType: err, errorMessage: "Unable to find player" });
   }
}