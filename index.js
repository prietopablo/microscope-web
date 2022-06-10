// We import express module
const express = require('express');
const router = require('./back/app/router');

// Our app will use express
const app = express();

// We will listen on the port in our dotenv file else the port 3000
const PORT = process.env.PORT || 3000;

app.use(router);

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});