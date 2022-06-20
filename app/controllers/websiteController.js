const mainController = { 
    homePage : (request, response) => {
        console.log('Ceci est un test');

        response.send('Ceci est un test pour le Front');
    },
};

module.exports = mainController;