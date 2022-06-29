const client = require('./client');

const cardDatamapper = {

   async findAllByPosition (data) {

      let preparedQuery = {};

      if(data.cardType === "period") {
         preparedQuery = {
            text: `SELECT * FROM "period" WHERE position >= $1 AND $2 = $3`,
            values: [data.previous_card_position + 1, `${data.parentType}_id`, data.parentId]
         };
      }
      else if (data.cardType === "event") {
         preparedQuery = {
            text: `SELECT * FROM "event" WHERE position >= $1 AND $2 = $3`,
            values: [data.previous_card_position + 1, `${data.parentType}_id`, data.parentId]
         };
      }
      else {
         preparedQuery = {
            text: `SELECT * FROM "scene" WHERE position >= $1 AND $2 = $3`,
            values: [data.previous_card_position + 1, `${data.parentType}_id`, data.parentId]
         };
      }
      
      console.log("preparedQuery", preparedQuery);

      const result = await client.query(preparedQuery);   

      return result.rows;
   },

   async findFocusByGameId(gameId) {
      
      const result = await client.query('SELECT * FROM "focus" WHERE "game_id" = $1 ORDER BY "position" ASC', [gameId]);

      if (result.rowCount === 0) {
          return null;
      }

      return result.rows; 
   },

   async findPeriodByGameId(gameId) {

      const result = await client.query('SELECT * FROM "period" WHERE "game_id" = $1 ORDER BY "position" ASC', [gameId]);

      if (result.rowCount === 0) {
          return null;
      }

      return result.rows;
  },

   async findEventByPeriodId(periodId) {

      const result = await client.query('SELECT * FROM "event" WHERE "period_id" = $1 ORDER BY "position" ASC', [periodId]);

      if (result.rowCount === 0) {
         return null;
      }

      return result.rows;
   },

   async findSceneByEventId(eventdId) {

      const result = await client.query('SELECT * FROM "scene" WHERE "event_id" = $1 ORDER BY "position" ASC', [eventdId]);

      if (result.rowCount === 0) {
         return null;
      }

      return result.rows;
   },

   async insert (data) {

      console.log("datainsert", data);

      let preparedQuery = {};

      if(data.cardType === "period") {
         preparedQuery = {
            text: `INSERT INTO "period" ("text", "tone", "position", "game_id") VALUES ($1, $2, $3, $4)`,
            values: [data.text, data.tone, data.previous_card_position + 1, data.parentId]
         };
      }
      else if (data.cardType === "event") {
         preparedQuery = {
            text: `INSERT INTO "event" ("text", "tone", "position", "period_id") VALUES ($1, $2, $3, $4)`,
            values: [data.text, data.tone, data.previous_card_position + 1, data.parentId]
         };
      }
      else {
         preparedQuery = {
            text: `INSERT INTO "scene" ("text", "tone", "position", "event_id") VALUES ($1, $2, $3, $4)`,
            values: [data.text, data.tone, data.previous_card_position + 1, data.parentId]
         };
      }
      
      await client.query(preparedQuery);
   },
      
   async insertFocus (content, position, gameId) {

      const preparedQuery = {
         text: `INSERT INTO "focus" ("text", "author_id", "position", "game_id") VALUES ($1, $2, $3, $4)`,
         values: [content.text, content.author_id, position, gameId]
      };

      console.log("preparedQueryinsertFocus", preparedQuery)

      await client.query(preparedQuery);
   },

   async updatePosition (cardType, cardId, newPosition) {

      const preparedQuery = {
         text: `UPDATE ${cardType} SET
            position = $1
            WHERE id = $2
            RETURNING *`,
          values: [newPosition, cardId],
      };

      const savedCard = await client.query(preparedQuery);
   
      return savedCard.rows[0];
   }
}

module.exports = cardDatamapper;