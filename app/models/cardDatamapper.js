const client = require('./client');

const cardDatamapper = {

   async insert(inputData, gameId) {      

      const preparedQuery = {
         text: `INSERT INTO $1 ("text", "tone", "position", "game_id") VALUES ( $2, $3, $4, $5 )`,
         values: [...inputData, gameId]
      };

      await client.query(preparedQuery);
   }
}

module.exports = cardDatamapper;