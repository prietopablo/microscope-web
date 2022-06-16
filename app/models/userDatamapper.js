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

    async findUserByUsername(username) {
        const result = await client.query('SELECT * FROM "user" WHERE "username" = $1', [username]);

        if (result.rowCount === 0) {
            return null;
        }
        
        return result.rows[0];
    },

    async insert(content, hashedPassword) {
        
        const preparedQuery = {
            text: `INSERT INTO "user" ("username", "email", "password") VALUES ($1, $2, $3)`,
            values: [content.username, content.email, hashedPassword]
        };

        const newUser = await client.query(preparedQuery);

        return newUser.rows[0];

    },

    async delete(userId) {
        const result = await client.query('DELETE FROM "user" WHERE "id" = $1', [userId]);

        return !!result.rowCount;
    },

    async update(inputData, userId) {
        const fields = Object.keys(inputData).map((prop, index) => `"${prop}" = $${index + 1}`);
        const values = Object.values(inputData);

        const date = Date.now();

        const savedUser = await client.query(
            `
                UPDATE "user" SET
                    ${fields}, "updated_at" = $${fields.length + 2}
                WHERE id = $${fields.length + 1}
                RETURNING *`,
            [...values, userId, date],
        );

        return savedUser.rows[0];
    },

    async isUnique (inputData, userId) {
        /*
        const results = {
            isUniqueUsername: true,
            isUniqueEmail: true
        };
        if (inputData.username) {
            const result = await client.query('SELECT * FROM "user" WHERE "username"= $1', [inputData.username]);
            if (result.rows !== 0) {
                result.isUniqueUsername = false;
            }
        }
        if (inputData.email) {
            const result = await client.query('SELECT * FROM "user" WHERE "email"= $1', [inputData.email]);
            if (result.rows !== 0) {
                result.isUniqueEmail = false;
            }
        }
        return results;
        */

        const fields = [];
        const values = [];
        // We gather our inputData
        Object.entries(inputData).forEach(([key, value], index) => {
            // We keep the data that are supposed to be unique
            if (['username', 'email'].includes(key)) {
                // We generate filters
                fields.push(`"${key}" = $${index + 1}`);
                values.push(value);
            }
        });

        const preparedQuery = {
            text: `SELECT * FROM "user" WHERE (${fields.join(' OR ')})`,
            values,
        };
        // If an id is specified, we exclude its registered row
        if (userId) {
            preparedQuery.text += ` AND id <> $${values.length + 1}`;
            preparedQuery.values.push(userId);
        }
        const result = await client.query(preparedQuery);

        if (result.rowCount === 0) {
            return null;
        }

        return result.rows[0];
    }
};

module.exports = userDatamapper;