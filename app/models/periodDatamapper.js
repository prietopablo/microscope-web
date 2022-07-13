const client = require('./client');

const periodDatamapper = {

   async findByGameId(gameId) {

      const result = await client.query('SELECT * FROM "period" WHERE "game_id" = $1 ORDER BY "position" ASC', [gameId]);

      if (result.rowCount === 0) {
            return null;
      }

      return result.rows;
   }
}

module.exports = periodDatamapper;