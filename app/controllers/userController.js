const userDatamapper = require('../models/userDatamapper');

const userController = {

    async getAll(_, response) {
        
        const userList = await userDatamapper.findAll();
        response.json({ userList });
    },

    async create(request, response) {
        // We call for the body
        const newUser = request.body;
        await userDatamapper.insert(newUser);
        // We display the user list with the new data
        const userList = await userDatamapper.findAll();
        response.json({ userList });
    },
};

module.exports = userController;