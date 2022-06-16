const client = require('./client');

const cardDatamapper = {

   async insert(cardType, content) {

      const preparedQuery = {
         text : `INSERT INTO $1 ("text", "period_tone", "position") VALUES ($2, $3, $4)`,
         values: [cardType, content]
      };

      newCard = await client.query(preparedQuery);

      return newCard.rows[0];
   }
};