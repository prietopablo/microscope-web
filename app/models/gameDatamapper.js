const client = require('./client');

const gameDatamapper = {

   async insertCreator(content) {
      // We need to insert data for each starting game relations
      // of course the "game" table but also "participation" and "palette"
      console.log(content.creator_id);
      const preparedQuery = {
         text : `INSERT INTO "game" ("creator_id", "current_user_id") VALUES ($1, $2)`,
         values: [content.creator_id, content.creator_id]
      };

      await client.query(preparedQuery);
   },

   async insertAll(content) {

      // We need to insert data for each starting game relations
      // of course the "game" table but also "participation" and "palette"
      
      const preparedQuery = {
         text : `INSERT INTO "game" ("big_picture", "state", "bookend_start", "bookend_start_tone", "bookend_end", "bookend_end_tone", "creator_id", "current_user_id") VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
         values: [content.big_picture, content.state, content.bookend_start, content.bookend_start_tone, content.bookend_end, content.bookend_end_tone, content.creator_id, content.current_user_id]
      };

      const newGame = await client.query(preparedQuery);
      console.log("newGame.rows[0]", newGame.rows[0]);
      return newGame.rows[0];
   },

   async findByPk(gameId) {
      const result = await client.query('SELECT * FROM "game" WHERE "id" = $1', [gameId]);

      if (result.rowCount === 0) {
         return null;
      }
      
      return result.rows[0];

  },

  async updateToStartGame(inputData, userId) {

   const fields = Object.keys(inputData).map((prop, index) => `"${prop}" = $${index + 1}`);
   const values = Object.values(inputData);

   console.log("fields", fields);
   console.log("values", values);

   // const date = Date.now();
   // console.log("Date", date);
   const savedUser = await client.query(
       `
           UPDATE "game" SET
               ${fields}, "updated_at" = $${fields.length + 2}
           WHERE id = $${fields.length + 1}
           RETURNING *`,
       [...values, userId/*, date*/],
   );

   return savedUser.rows[0];
},
}

module.exports = gameDatamapper;