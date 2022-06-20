const client = require('./client');

const cardDatamapper = {

   async insert(data) {
     
      console.log("data", data);

      const index = data.previous_card_position;

      console.log("index", index);

      const verifQuery = {
         text: "SELECT * FROM $1 WHERE position = $2",
         values: [data.cardType, index + 1]
      }

      const result = await client.query(verifQuery);

      console.log(result.rows[0]);

      // while (result.rows[0]) {

      //    index++;

      //    await client.query("UPDATE $1 SET position = $2 WHERE id = $3", [data.cardType, index + 1, result.rows[0].id]);
         
      //    result = await client.query("SELECT * FROM $1 WHERE position = $2", [data.cardType, index + 1]);

      // }
  
      // const preparedQuery = {
      //    text: `INSERT INTO $1 ("text", "tone", "position", "$2") VALUES ($3, $4, $5, $6)`,
      //    values: [data.cardType, "game_id", data.text, data.previous_card_position + 1, data.game_id]
      // };

      // await client.query(preparedQuery);
   }
}

module.exports = cardDatamapper;