const client = require('./client');

const userDatamapper = {
    async getAllUsers() {
        const result = await client.query('SELECT * FROM user');
        return result.rows;
    },

    async insertNewUser(newUser) {
        const preparedQuery = {
            text: `INSERT INTO user (newUser) VALUES($1)`,
            values: [newUser],
        };

        await client.query(preparedQuery);

    },
};

module.exports = userDatamapper;