const userDatamapper = require('../../models/userDatamapper');
const bcrypt = require('bcrypt');

const userController = {

    async getAll (request, response) {
        console.log(request.body);
        const userList = await userDatamapper.findAll();
        response.json({ userList });
    },

    async getOne (request, response) {
        console.log(request.params.id);
        const user = await userDatamapper.findByPk(request.params.id);
        
        if (!user) {
            return response.status(404).json();
        }

        return response.json({ user });
    },

    async create (request, response) {

        // We call for the body        
        const user = await userDatamapper.isUnique(request.body);
        if (user) {
            let field;
            if (user.username === request.body.username) {
                field = 'username';
            } else {
                field = 'email';
            }
            return response.status(400).json({ errorMessage: `Other user already exists with this ${field}` });
            
        }

        // We use bcrypt module to hash our password value
        const hashedPassword = await bcrypt.hash(request.body.password, 10);

        const savedUser = await userDatamapper.insert(request.body, hashedPassword);
        return response.json(savedUser);
    
    },

    async delete (request, response) {
        
        const user = await userDatamapper.findByPk(request.params.id);

        if (!user) {
            return response.status(404).json();
        }

        await userDatamapper.delete(request.params.id);
        return response.status(204).json();
    },

    async update (request, response) {
        console.log(request.body);
        const user = await userDatamapper.findByPk(request.params.id);

        if (!user) {
            return response.status(404).json();
        }

        if (request.body.username || request.body.email) {
            const existingUser = await userDatamapper.isUnique(request.body, request.params.id);
            if (existingUser) {
                let field;
                if (existingUser.username === request.body.username) {
                    field = 'username';
                } else {
                    field = 'email';
                }
                return response.status(400).json({ errorMessage: `Other user already exists with this ${field}` });
            }
        }

        const savedUser = await userDatamapper.update(request.params.id, request.body);
        return response.json(savedUser);
    },

};

module.exports = userController;