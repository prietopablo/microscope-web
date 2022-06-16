const userDatamapper = require('../../models/userDatamapper');
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

   async logout (_, response) {
      try {
         
         // We will destroy the JWT on the client side

         response.status(200).json({ mesage: "logged out !"});

      } catch (error) {
         console.log(error);
      }
   }
}

module.exports = authenticationController;