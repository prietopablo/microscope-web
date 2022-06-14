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
         // Validate if password is correct using bcrypt
         const passwordVerified = await bcrypt.compare(request.body.password, user.password);

         if (user && passwordVerified) {
            // Create JSON token
            const userToken =  jwt.sign(
               { user_id: user.id },
               process.env.TOKEN_KEY,
               {
                  expiresIn: "2h",
               }
            );

            // We send our user
            response.status(200).json({ user, userToken });
         }
         else {
            response.status(400).json({ errorMessage : "Invalid Credentials" });
         }


      } catch (error) {
         console.log(error);
      }
   }
}

module.exports = authenticationController;