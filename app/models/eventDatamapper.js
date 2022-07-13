const client = require('./client');

const eventDatamapper = {

   async findByPeriodId(periodId) {

      const result = await client.query('SELECT * FROM "event" WHERE "period_id" = $1 ORDER BY "position" ASC', [periodId]);

      if (result.rowCount === 0) {
         return null;
      }

      return result.rows;
   }
}

module.exports = eventDatamapper;