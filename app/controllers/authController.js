const userDatamapper = require('../models/userDatamapper');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authenticationController = {

   async login (request, response) {

      try {
         // Validate user input         
         const { username, password } = request.body;

         if (!(username && password)) {
            return response.status(400).json({ errorMessage: `All input is required` });
         }
         // Validate if user exist in our database
         const user = await userDatamapper.findUserByUsername(request.body.username);

         if (!user) {
            console.log("!user");
            return response.json({ errorMessage : "user not found" });
         }
         // Validate if password is correct using bcrypt
         const passwordVerified = await bcrypt.compare(request.body.password, user.password);

         console.log("username", username);

         if (user && passwordVerified) {
            // Create JSON token
            const token =  jwt.sign(
               { userId: user.id, userName: username },
               process.env.TOKEN_KEY,
               {
                  expiresIn: "6h",
               }
            );

            // We send our user
            console.log(`user connected as ${user.role}`);
            
            return response.json({ username: user.username, email: user.email, userId: user.id, token });
         }
         else {
            console.log("in else login");
            return response.json({ errorMessage : "Invalid Credentials" });
         }
      } catch (err) {
         console.log("in catch login");
         return response.json({errotType: err.message, errorMessage: "Unable to check credentials"});
      }
   },

   // Logout happen on the client side UwU'

   async verifyToken (request, response) {

      try {      
         const token = request.headers.authorization.split(' ')[1];
         console.log("token", token);

         jwt.verify(token, process.env.TOKEN_KEY, function (err, decoded){

            if (err) {
               return response.json({ errorMessage: "Token invalid" });
               
            }

            return response.json({ userId: decoded.userId, userName: decoded.userName,  Message: "Token valid !"});

         });

      }
      catch (err) {
         return response.json({errotType: err.message, errorMessage: "Unable to verify the token"});
      }
   }
}

module.exports = authenticationController;