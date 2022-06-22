const jwt = require("jsonwebtoken");

module.exports = (request, response, next) => {
   try { 

      const token = request.headers.authorization.split(' ')[1];

      console.log("token", token);

      jwt.verify(token, process.env.TOKEN_KEY, function(err, decoded){

         if (err) {
            return response.json({ errorMessage: "Token invalid" });            
         }

         response.locals.userIdRetrieved = decoded.userId;

         response.json({ userId: decoded.userId,  Message: "Token valid !"});

      });

      console.log("response.locals.userIdRetrieved", response.locals.userIdRetrieved);
      next();
   }
   catch {
      response.json({ errorMessage: "Unable to match token" });
   }
}