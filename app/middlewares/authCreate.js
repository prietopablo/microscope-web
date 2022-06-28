const jwt = require("jsonwebtoken");

module.exports = async (request, response, next) => {

   try {      
      const token = request.headers.authorization.split(' ')[1];
      console.log("token", token);

      jwt.verify(token, process.env.TOKEN_KEY, function (err, decoded){

         if (err) {
            return response.json({ errorMessage: "Token invalid" });
            
         }
         else {
            next();
         }

      });

   }
   catch (err) {
      return response.json({errotType: err.message, errorMessage: "Unable to verify the token"});
   }
}