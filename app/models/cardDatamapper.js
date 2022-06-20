const client = require('./client');

const cardDatamapper = {

   async findByPosition (data) {

      console.log("datamapper");

      const preparedQuery = {
         text: `SELECT * FROM ${data.cardType} WHERE position >= ${data.previous_card_position + 1} AND ${data.parentType}_id = ${data.parentId}`
      };

      // make it more secure
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

      console.log("preparedQuery", preparedQuery);

      const result = await client.query(preparedQuery);

      console.log("result", result.rows);      

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
   }   
}

module.exports = cardDatamapper;