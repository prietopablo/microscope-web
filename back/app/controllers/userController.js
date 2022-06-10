const userDatamapper = require('../models/userDatamapper');

const userController = {

    async getAll(_, response) {
        
        const userList = await userDatamapper.findAll();
        response.json({ userList });
    },

    async create(request, response) {
        const newUser = request.body;
        await userDatamapper.insertNewUser(newUser);
        const userList = await userDatamapper.getAllUsers();
        response.json({ userList });
    },
};

module.exports = userController;