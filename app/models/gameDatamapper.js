const client = require('./client');

const gameDatamapper = {

   async insertCreator(content) {

      // We need to insert data for each starting game relations
      // of course the "game" table but also "participation" and "palette"
      console.log(content.creator_id);
      const preparedQuery = {
         text: `INSERT INTO "game" ("creator_id", "current_user_id") VALUES ($1, $2) RETURNING *` ,
         values: [content.creator_id, content.creator_id]
      };


      await client.query(preparedQuery);

      return result.rows[0]
   },

   async insertAll(content) {

      // We need to insert data for each starting game relations
      // of course the "game" table but also "participation" and "palette"    
      const preparedQuery = {
         text : `INSERT INTO "game" ("big_picture", "state", "bookend_start", "bookend_start_tone", "bookend_end", "bookend_end_tone", "creator_id", "current_user_id") VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
         values: [content]
      };

      await client.query(preparedQuery);
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
         `UPDATE "game" SET
            ${fields}, "updated_at" = Now()
            WHERE id = $${fields.length + 1}
            RETURNING *`,
         [...values, gameId],
      );

      return savedGame.rows[0];
   },

   async findAllArchived() {
        
      const result = await client.query('SELECT * FROM "game" WHERE "game".state = archived;');

      if (result.rowCount === 0) {
          return null;
      }
      
      return result.rows;
  },
}

module.exports = gameDatamapper;