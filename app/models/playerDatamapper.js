const client = require('./client');

const playerDatamapper = {

   async insert(gameId, playerId) {

      const preparedQueryParticipation = {
      text : `INSERT INTO "participation" ("game_id", "player_id") VALUES (${gameId}, $1)`,
      values: [playerId]
      }

      const newPlayer = await client.query(preparedQueryParticipation);

      return newPlayer.rows[0];

   }

}

module.exports = playerDatamapper;