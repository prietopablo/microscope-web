const client = require('./client');

const sceneDatamapper = {

   async findByEventId (eventdId) {

      const result = await client.query('SELECT * FROM "scene" WHERE "event_id" = $1 ORDER BY "position" ASC', [eventdId]);

      if (result.rowCount === 0) {
         return null;
      }

      return result.rows;
   },

   async findAllByPosition (data) {

      const preparedQuery = {
            text: `SELECT * FROM "scene" WHERE position >= $1 AND $2 = $3`,
            values: [data.previous_card_position + 1, `${data.parentType}_id`, data.parentId]
         };

      const result = await client.query(preparedQuery);   

      return result.rows;
   },

   async insert (data) {

      const preparedQuery = {
            text: `INSERT INTO "scene" ("text", "tone", "position", "game_id") VALUES ($1, $2, $3, $4) RETURNING *`,
            values: [data.text, data.tone, data.previous_card_position + 1, data.parentId]
         };

      const result = await client.query(preparedQuery);
      return result.rows[0];

   },

   async updatePosition (cardId, newPosition) {

      const preparedQuery = {
         text: `UPDATE "scene" SET
            position = $1
            WHERE id = $2
            RETURNING *`,
          values: [newPosition, cardId],
      };

      const savedCard = await client.query(preparedQuery);
   
      return savedCard.rows[0];
   }
}

module.exports = sceneDatamapper;