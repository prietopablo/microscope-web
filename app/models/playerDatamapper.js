const client = require('./client');

const playerDatamapper = {

   async insert(gameId, playerId) {

      const preparedQuery = {
      text : `INSERT INTO "participation" ("game_id", "player_id") VALUES ($1, $2)`,
      values: [gameId, playerId]
      }

      const newPlayer = await client.query(preparedQuery);

      return newPlayer.rows[0];

   }

}

module.exports = playerDatamapper;