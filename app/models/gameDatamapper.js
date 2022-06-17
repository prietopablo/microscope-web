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
      
      const preparedQueryGame = {
         text : `INSERT INTO "game" ("big_picture", "state", "bookend_start", "bookend_start_tone", "bookend_end", "bookend_end_tone", "creator_id", "current_user_id") VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
         values: [content]
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

  async updateToStartGame(inputData, gameId) {

   const fields = Object.keys(inputData).map((prop, index) => `"${prop}" = $${index + 1}`);
   const values = Object.values(inputData);

   console.log("fields", fields);
   console.log("values", values);

   
   const savedGame = await client.query(
       `
           UPDATE "game" SET
               ${fields}, "updated_at" = Now()
           WHERE id = $${fields.length + 1}
           RETURNING *`,
       [...values, gameId],
   );

   return savedGame.rows[0];
   },

   async findAllArchive (data) {}
}

      return newCard.rows[0];
   }
};
