const client = require('./client');

const userDatamapper = {

    async findAll() {
        
        const result = await client.query('SELECT * FROM "user";');
        
        return result.rows;
    },

    async insertNewUser(content) {
        console.log(content);
        const preparedQuery = {
            text: `INSERT INTO "user" (username, email, password) VALUES($1)`,
            values: [content],
        };

        const newUser = await client.query(preparedQuery);

        return newUser.rows[0];

    },
};

module.exports = userDatamapper;