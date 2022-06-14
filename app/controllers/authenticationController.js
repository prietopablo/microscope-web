/*const userDatamapper = require('../models/userDatamapper');
const bcrypt = require('bcrypt');

const authenticationController = {
   async login (request, response) {
      try {
         // Validate user input
         if (!request.body.username && !request.body.password) {
            return response.status(400).json({ errorMessage: `All input is required` });
         }
         // Validate if user exist in our database
         const user = await userDatamapper.findUserByUsername(request.body.username);
         // Validate if password is correct using bcrypt
         const passwordVerified = await bcrypt.compare(request.body.password, user.password);

         if (user && passwordVerified) {
            // Create JSON token
            const token =  jwt.sign(
               { user_id: user.id, username },
               process.env.TOKEN_KEY,
               {
                  expiresIn: "2h",
               }
            );
            // We need to store the token, but i'm not sure if we can do it by changing its value like this
            user.token = token;

            // We send our user
            response.status(200).json(user);
         }
         else {
            response.status(400).json({ errorMessage : "Invalid Credentials" });
         }


      } catch (error) {
         console.log(error);
      }
   }
}

module.exports = authenticationController;*/