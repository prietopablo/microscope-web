const LocalStrategy = require('passport-local').Strategy;
const userDatamapper = require('../models/userDatamapper');

function initialize(passport) {

   const authenticateUser = (username, password) => {
      const user = userDatamapper.getUserByUsername(username);
      if (!user) {
         return done(null, false, { message: 'No user with that username' });
      }

      try {
         if (await bcrypt.compare(password, user.password)) {
            return done(null, user);
         } else {
            return done(null, false, { message: 'Password incorrect' };)
         }
      } catch (error) {
         return done(error);
      }
   }
   
   passport.use(new LocalStrategy({ usernameField: 'username '}), authenticateUser);

   passport.serializeUser((user, done) => {});
   passport.deserializeUser((id, done) => {});
}

module.exports = initialize;