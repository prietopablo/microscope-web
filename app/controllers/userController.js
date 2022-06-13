const userDatamapper = require('../models/userDatamapper');

const userController = {

    async getAll(_, response) {
        
        const userList = await userDatamapper.findAll();
        response.json({ userList });
    },

    async getOne(request, response) {
        console.log(request.params.id);
        const user = await userDatamapper.findByPk(request.params.id);
        
        // WE need res a 404 if there is no user at this primary key

        return response.json({ user });
    },

    async create(request, response) {
        // We call for the body
        const newUser = request.body;
        await userDatamapper.insert(newUser);
        // We display the user list with the new data
        const userList = await userDatamapper.findAll();
        response.json({ userList });
    },

    async delete(request, response) {

    },

    async update(request, response) {
        
    },

};

module.exports = userController;