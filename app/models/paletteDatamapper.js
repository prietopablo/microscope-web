const client = require('./client');

const paletteDatamapper = {

   async insert(gameId, content) {
      
      const preparedQuery = {
         text : `INSERT INTO "palette" ("text", "status", "game_id") VALUES ($1, $2, $3)`,
         values: [ content.text, content.status, gameId]
      };

      const newGame = await client.query(preparedQuery);
      
      return newGame.rows[0];
   }
}