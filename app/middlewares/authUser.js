const jwt = require("jsonwebtoken");

module.exports = (request, response, next) => {
   try { 

      const token = request.headers.authorization.split(' ')[1];
      console.log("token", token);
      const decodedToken = jwt.verify(token, process.env.TOKEN_KEY);

      const userId = decodedToken.userId;

      if (request.params.id !== String(userId)) {

         response.json({ errorMessage: "Invalid User Id" });
      } 
      else {
         next();
      }
   }
   catch {
      response.json({ errorMessage: "Unable to match token" });
   }
}