const client = require('./client');

const gameDatamapper = {

   async insert(content) {

      // We need to insert data for each starting game relations
      // of course the "game" table but also "participation" and "palette"
      
      const preparedQuery = {
         text : `INSERT INTO "game" ("big_picture", "state", "bookend_start", "bookend_start_tone", "bookend_end", "bookend_end_tone", "creator_id", "current_user_id") VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
         values: [content.big_picture, content.state, content.bookend_start, content.bookend_start_tone, content.bookend_end, content.bookend_end_tone, content.creator_id, content.current_user_id]
      };

      const newGame = await client.query(preparedQuery);
      
      return newGame.rows[0];
   }
}

module.exports = gameDatamapper;