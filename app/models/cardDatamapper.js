const client = require('./client');

const cardDatamapper = {

   async findAllByPosition (data) {

      console.log("datamapper");

      const preparedQuery = {
         text: `SELECT * FROM ${data.cardType} WHERE position >= ${data.previous_card_position + 1} AND ${data.parentType}_id = ${data.parentId}`
      };

      // MAKE it more secure !!!!!!!!!!!!!!!!
      // const preparedQuery = {
      //    text: `SELECT * FROM ${data.cardType} WHERE position = $1 AND $2 = $3`,
      //    values : [
      //       // data.cardType,
      //       data.previous_card_position + 1,
      //       `${data.parentType}_id`,
      //       data.parentId]
      // };

      // const result = await client.query('SELECT * FROM $1 WHERE position = $2 AND $3 = $4',
      // [data.cardType, data.previous_card_position, `${data.parentType}_id`, data.parentId]);

      const result = await client.query(preparedQuery);   

      return result.rows;
   },

   async findPeriodByGameId(gameId) {

      const result = await client.query('SELECT * FROM "period" WHERE "game_id" = $1', [gameId]);

      if (result.rowCount === 0) {
          return null;
      }

      return result.rows;
  },

   async findEventByPeriodId(periodId) {

      const result = await client.query('SELECT * FROM "event" WHERE "period_id" = $1', [periodId]);

      if (result.rowCount === 0) {
         return null;
      }

      return result.rows;
   },

   async findSceneByEventId(eventdId) {

      const result = await client.query('SELECT * FROM "scene" WHERE "event_id" = $1', [eventdId]);

      if (result.rowCount === 0) {
         return null;
      }

      return result.rows;
   },

   async insert (data) {
     
      console.log("datainsert", data);

      const parentType = `${data.parentType}_id`;
      const positionToUpdate = data.previous_card_position + 1;
      
      console.log("positionToUpdate", positionToUpdate);

      const preparedQuery = {
         text: `INSERT INTO ${data.cardType} ("text", "tone", "position", "${parentType}") VALUES ('${data.text}', '${data.tone}', '${positionToUpdate}', '${data.parentId}')`
      };

      console.log("preparedQuery", preparedQuery);


      // const preparedQuery = {
      //    text: `INSERT INTO $1 ("text", "tone", "position", "$2") VALUES ($3, $4, $5, $6)`,
      //    values: [data.cardType, data.tone, `${data.parenType}_id`, data.text, data.previous_card_position + 1, data.game_id, data.parentId]
      // };

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
      console.log(preparedQuery);

      const savedCard = await client.query(preparedQuery);
   
      return savedCard.rows[0];
   },
   
   async insertFocus (content) {

      const preparedQuery = {
         text: `INSERT INTO "focus" ("description", "author_id", "position")`,
         values: [content]
      };

      console.log("preparedQuery", preparedQuery);


      await client.query(preparedQuery);

   },
}

module.exports = cardDatamapper;