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
   }
}

module.exports = cardDatamapper;