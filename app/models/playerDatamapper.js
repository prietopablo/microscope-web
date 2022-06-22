const client = require('./client');

const playerDatamapper = {

   async insert(gameId, dataPlayerId, position) {

      const preparedQuery = {
      text : `INSERT INTO "participation" ("game_id", "player_id", "position") VALUES ($1, $2, $3)`,
      values: [gameId, dataPlayerId, position]
      }

      const newPlayer = await client.query(preparedQuery);

      return newPlayer.rows[0];
   }
}

module.exports = playerDatamapper;