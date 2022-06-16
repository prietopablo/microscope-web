const jwt = require("jsonwebtoken");

module.exports = (request, response, next) => {
   try {
      
      const token = request.headers.authorization.split(' ')[1];
      console.log("token", token);
      jwt.verify(token, process.env.TOKEN_KEY);
      next();
   }
   catch {
      response.status(401).json({ errorMessage: "unable to match token" });
   }
}