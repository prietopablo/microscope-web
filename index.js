// file made to run the http server

// We use http module for testing our implementations
const http = require('http');

// Our app needs to reference ./app who contains an Express app
const app = require('./app');

// We will listen on the port in our dotenv file else the port 3000
const PORT = process.env.PORT ?? 3000;

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});