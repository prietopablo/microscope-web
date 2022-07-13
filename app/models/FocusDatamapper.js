const client = require('./client');

const focusDatamapper = {

   async findByGameId (gameId) {
      
      const result = await client.query('SELECT * FROM "focus" WHERE "game_id" = $1 ORDER BY "position" ASC', [gameId]);

      if (result.rowCount === 0) {
          return null;
      }

      return result.rows; 
   },

   async insert (content, position, gameId) {

      const preparedQuery = {
         text: `INSERT INTO "focus" ("text", "author_id", "position", "game_id") VALUES ($1, $2, $3, $4) RETURNING *`,
         values: [content.text, content.author_id, position, gameId]
      };

      console.log("preparedQueryinsertFocus", preparedQuery)

      const result = await client.query(preparedQuery);
      return result.rows[0];
   }
}

module.exports = focusDatamapper;