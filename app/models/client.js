const { Client } = require('pg');
require('dotenv').config();

const config = () => {
    if (process.env.NODE_ENV === 'production')
      return {
        connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false,
        },
      };
    return {
      connectionString: process.env.PG_URL,
    };
  };
  
  const client = new Client(config());


client.connect();

module.exports = client;