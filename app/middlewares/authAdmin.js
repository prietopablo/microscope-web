const jwt = require("jsonwebtoken");

module.exports = (request, response, next) => {
   try { 

      const token = request.headers.authorization.split(' ')[1];
      console.log("token", token);
      const decodedToken = jwt.verify(token, process.env.TOKEN_KEY);

      const userRole = decodedToken.userRole;

      if ("admin" !== userRole) {

         return response.json({ errorMessage: "Invalid Role" });
      } else {
         console.log("Valid Role");
         next();   
      }
   } catch {
      return response.json({ errorMessage: "Unable to match token" });
   }
}