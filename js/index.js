//Discord bot init

require('dotenv').config();
const Discord = require('discord.js');
const { Client, GatewayIntentBits, PermissionsBitField} = require('discord.js');
const client = new Discord.Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
});


//when you run 'node index.js' this function runs
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

//if a message starts with an orb call, handle the request.
client.on('messageCreate', msg => {
    let msgLower = msg.content.toLowerCase();
    let arguments = msgLower.split(' ');

    if(arguments[0] === "!orb") {
        let arguments = msgLower.split(' ');

        if(arguments.length < 2) {
            msg.reply('orb call ' + msgLower + ' does not exist. (try !orb help)');
        }

        if(arguments.length === 4) {
            msg.reply(responseHandler(arguments[1],arguments[2],arguments[3]))
        } else {
            msg.reply(responseHandler(arguments[1],arguments[2]));
        }
    } else {
        msg.reply('did not hear my name');
    }
});

//enable error reporting
client.on('error',console.error);

//bot startup, this must be the last function
client.login(process.env.CLIENT_TOKEN).catch(console.error);