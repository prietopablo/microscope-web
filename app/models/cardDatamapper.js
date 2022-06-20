const client = require('./client');

const cardDatamapper = {

   async findByPosition (data) {

      console.log("datamapper");

      const preparedQuery = {
         text: `SELECT * FROM ${data.cardType} WHERE position = ${data.previous_card_position + 1} AND ${data.parentType}_id = ${data.parentId}`
      };

      // const preparedQuery = {
      //    text: `SELECT * FROM $1 WHERE position = $2 AND $3 = $4`,
      //    values : [data.cardType, data.previous_card_position, `${data.parentType}_id`, data.parentId]
      // };

      // const result = await client.query('SELECT * FROM $1 WHERE position = $2 AND $3 = $4',
      // [data.cardType, data.previous_card_position, `${data.parentType}_id`, data.parentId]);

      console.log("preparedQuery", preparedQuery);

      const result = await client.query(preparedQuery);

      console.log("result", result.rows[0]);      

      return result.rows[0];
   },

   async insert (data) {
     
      console.log("datainsert", data);

      const preparedQuery = {
         text: `INSERT INTO $1 ("text", "tone", "position", "$2") VALUES ($3, $4, $5, $6)`,
         values: [data.cardType, "game_id", data.text, data.previous_card_position + 1, data.game_id]
      };

      await client.query(preparedQuery);

   },

   async updatePosition (data, cardType) {

      const savedGame = await client.query(
          `UPDATE $1 SET
            position = $2
            WHERE $3 = $4
            RETURNING *`,
          [cardType, data.position + 1, `${data.parentType}_id`, data.parentId ],
      );
   
      return savedGame.rows[0];
   }   
}

module.exports = cardDatamapper;