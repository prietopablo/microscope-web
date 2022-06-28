const express = require('express');
const router = require('./router');
const cors = require('cors');

const app = express();

// We use the middleware to parse JSON payload
app.use(express.json());

// We use the middleware to parse urlencoded payload
app.use(express.urlencoded({ extended: true }));

// We will need to implement CORS restrictions (don't forget to require it !)
// it will look like this:
app.use(cors({
   "origin": "*",
   "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
   "preflightContinue": false,
   "optionsSuccessStatus": 204
 }));



app.use(router);

module.exports = app;