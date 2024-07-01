/**
 * OrbBot main file
 * adapted from https://discordjs.guide/creating-your-bot/main-file.html
 * @author Brenden Haskins
 */

// node classes
const fs = require('node:fs');
const path = require('node:path');

//discord.js classes
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');


//create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

//associate client commands globally
client.commands = new Collection();

const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		//set a new item in the collection with the key as the command name and the value as the exported module
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

//when the client is ready, run this code (only once)
client.once(Events.ClientReady, readyClient => {
	console.log(`orb bot init: ${readyClient.user.tag}`);
});

//command handler
client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand() && !interaction.isModalSubmit()) return;
	console.log(interaction);

    const command = interaction.client.commands.get(interaction.commandName);

    if(!command) {
        console.error('no such command: ${interaction.commandName}');
        return;
    }

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'orb bot critical error', ephemeral: true });
		} else {
			await interaction.reply({ content: 'orb bot critical error', ephemeral: true });
		}
    }


});

//log in to discord with client's token
client.login(token);