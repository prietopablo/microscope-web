const client = require('./client');

const focusDatamapper = {

   async findByGameId(gameId) {
      
      const result = await client.query('SELECT * FROM "focus" WHERE "game_id" = $1 ORDER BY "position" ASC', [gameId]);

      if (result.rowCount === 0) {
          return null;
      }

      return result.rows; 
   }
}

module.exports = focusDatamapper;