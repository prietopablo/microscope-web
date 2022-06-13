const { Client } = require('pg');
require('dotenv').config();

const client = new Client(process.env.PG_URL);

client.connect();

module.exports = client;