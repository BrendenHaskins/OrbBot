/**
 * initial module, brings the bot online
 * node index.js
 * @author Brenden Haskins
 */

require('dotenv').config();
const handler = require('./responseHandler.js');
const Discord = require('discord.js');
const { Client, GatewayIntentBits, PermissionsBitField} = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
});

//post init function
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

//if a message starts with an orb call, handle the request.
client.on('messageCreate', msg => {
    if(msg.author.bot) return;

    let msgLower = msg.content.toLowerCase();

    let arguments = msgLower.split(' ');

    if(arguments[0] === "!orb") {
        let arguments = msgLower.split(' ');

        if(arguments.length < 2) {
            msg.reply('orb call ' + msgLower + ' does not exist. (try !orb help)');
        } else if(arguments.length === 4) {
            msg.reply(handler.responseHandler(arguments[1],arguments[2],arguments[3]))
        } else {
            msg.reply(handler.responseHandler(arguments[1],arguments[2]));
        }
    }
});

//enable error reporting
client.on('error',console.error);

//bot startup, this must be the last function
client.login(process.env.CLIENT_TOKEN).catch(console.error);