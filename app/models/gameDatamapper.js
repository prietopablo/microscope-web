const client = require('./client');

const gameDatamapper = {

   async insert(content, playersId) {

      // We need to insert data for each starting game relations
      // of course the "game" table but also "participation" and "palette"
      
      const preparedQueryGame = {
         text : `INSERT INTO "game" ("big_picture", "state", "bookend_start", "bookend_start_tone", "bookend_end", "bookend_end_tone", "creator_id", "current_user_id") VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
         values: [content]
      };

      newGame = await client.query(preparedQueryGame);

      playersId.forEach(function)
      const preparedQueryParticipation = {
         text : `INSERT INTO "game" ("big_picture", "state", "bookend_start", "bookend_start_tone", "bookend_end", "bookend_end_tone", "creator_id", "current_user_id") VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
         values: [newGame.id];

      }

      return newCard.rows[0];
   }
};