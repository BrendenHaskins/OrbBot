const font = require('./fontUtilities.js');

function responseHandler(command,body,additional)  {
    switch (command) {
        case 'font':
            characters = Array.from(body);
            return font.changeFont(characters, additional);
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