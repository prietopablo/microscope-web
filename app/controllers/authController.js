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
            response.status(400).json({ errorMessage : "user not found" });
         }
         // Validate if password is correct using bcrypt
         const passwordVerified = await bcrypt.compare(request.body.password, user.password);

         if (user && passwordVerified) {
            // Create JSON token
            const token =  jwt.sign(
               { userId: user.id },
               process.env.TOKEN_KEY,
               {
                  expiresIn: "2h",
               }
            );
            // We send our user
            console.log(`user connected as ${user.role}`);
            response.status(200).json({ user, token });
         }
         else {
            response.status(400).json({ errorMessage : "Invalid Credentials" });
         }


      } catch (error) {
         console.log(error);
      }
   },

  // Logout happen on the client side

   async verifyToken (request, response) {
      try {      
         const token = request.headers.authorization.split(' ')[1];
         console.log("token", token);

         jwt.verify(token, process.env.TOKEN_KEY, function (err, decoded){

            if (err) {
               return response.status(401).json({ errorMessage: "Token invalid" });
               
            }

            return response.json({ userId: decoded.userId,  Message: "Token valid !"});

         });
      }
      catch (error) {
         response.status(401).json({ error });
      }
   }
   
}

module.exports = authenticationController;