require('fontUtilities');

function responseHandler(command,body,additional)  {
    switch (command) {
        case 'font':
            characters = Array.from(body);
            return changeFont(characters, additional);
        case 'test':
            msg.reply('is this thing on?');
            break;
        case 'help':
            msg.reply('orb is still in development. good luck.')
            break;
        default:
            msg.reply('orb call ' + command + ' does not exist. (try !orb help)');
            break;
    }
}