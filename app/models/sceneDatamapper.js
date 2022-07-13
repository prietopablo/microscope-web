const client = require('./client');

const sceneDatamapper = {

   async findByEventId(eventdId) {

      const result = await client.query('SELECT * FROM "scene" WHERE "event_id" = $1 ORDER BY "position" ASC', [eventdId]);

      if (result.rowCount === 0) {
         return null;
      }

      return result.rows;
   }
}

module.exports = sceneDatamapper;