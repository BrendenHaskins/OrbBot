const font = require('./fontUtilities.js');

function responseHandler(command,body)  {
    switch (command) {
        case 'font':
            let characters = Array.from(body);
            return font.changeFont(body);
        case 'test':
            return('is this thing on?');
        case 'help':
            return('orb is still in development. good luck.')
        default:
            return('orb call ' + command + ' does not exist. (try !orb help)');
    }
}

//allow module exporting of functions
module.exports = {
    responseHandler
};