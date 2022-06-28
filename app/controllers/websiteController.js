const mainController = { 
    
    homePage : (_, response) => {
        console.log('Microscope API front page');

        response.send('Welcome to Microscope-Web API');
    },
};

module.exports = mainController;