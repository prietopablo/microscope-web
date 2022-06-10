const userDatamapper = require('../models/userDatamapper');

const userController = {
    async get(request, response) {
        const userList = await userDatamapper.getAllUsers();
        response.json({ userList });
    },

    async post(request, response) {
        const newUser = request.body;
        await userDatamapper.insertNewUser(newUser);
        const userList = await userDatamapper.getAllUsers();
        response.json({ userList });
    },
};

module.exports = userController;