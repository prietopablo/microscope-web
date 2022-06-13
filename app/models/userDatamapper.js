const client = require('./client');

const userDatamapper = {

    async findAll() {
        
        const result = await client.query('SELECT * FROM "user";');
        
        return result.rows;
    },

    async findByPk(userId) {
        const result = await client.query('SELECT * FROM "user" WHERE "id" = $1', [userId]);

        if (result.rowCount === 0) {
            return null;
        }
        
        return result.rows[0];

    },

    async insert(content) {
        
        console.log(content);
        const preparedQuery = {
            text: `INSERT INTO "user" ("username", "email", "password") VALUES ($1, $2, $3)`,
            values: [content.username, content.email, content.password]
        };

        const newUser = await client.query(preparedQuery);

        return newUser.rows[0];

    },
};

module.exports = userDatamapper;