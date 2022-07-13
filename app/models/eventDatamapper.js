const client = require('./client');

const eventDatamapper = {

   async findByPeriodId (periodId) {

      const result = await client.query('SELECT * FROM "event" WHERE "period_id" = $1 ORDER BY "position" ASC', [periodId]);

      if (result.rowCount === 0) {
         return null;
      }

      return result.rows;
   },

   async findAllByPosition (data) {

      const preparedQuery = {
            text: `SELECT * FROM "event" WHERE position >= $1 AND $2 = $3`,
            values: [data.previous_card_position + 1, `${data.parentType}_id`, data.parentId]
         };

      const result = await client.query(preparedQuery);   

      return result.rows;
   },

   async insert (data) {

      const preparedQuery = {
            text: `INSERT INTO "event" ("text", "tone", "position", "game_id") VALUES ($1, $2, $3, $4) RETURNING *`,
            values: [data.text, data.tone, data.previous_card_position + 1, data.parentId]
         };

      const result = await client.query(preparedQuery);
      return result.rows[0];

   },

   async updatePosition (cardId, newPosition) {

      const preparedQuery = {
         text: `UPDATE "event" SET
            position = $1
            WHERE id = $2
            RETURNING *`,
          values: [newPosition, cardId],
      };

      const savedCard = await client.query(preparedQuery);
   
      return savedCard.rows[0];
   }
}

module.exports = eventDatamapper;