const express = require('express');
const session = require('express-session');
const router = require('./router');
const cors = require('cors');

const app = express();

// we will put VIEW ENGINE here

// We use the middleware to parse JSON payload
app.use(express.json());


app.use(session({
   secret: process.env.SESSION_PASS || 'password par fort',
   resave: false,
   saveUninitialized: true
}));

// We use the middleware to parse urlencoded payload
app.use(express.urlencoded({ extended: true }));

// We will need to implement CORS restrictions (don't forget to require it !)
// it will look like this:
app.use(cors(process.env.CORS_DOMAINS ?? '*'));

app.use(router);

module.exports = app;