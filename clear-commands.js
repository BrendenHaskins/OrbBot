/**
 * command registry clear
 * adapted from https://discordjs.guide/creating-your-bot/command-deployment.html
 * @author Brenden Haskins
 */

const { REST, Routes } = require('discord.js');
const { clientId, token } = require('./config.json');

//construct and prepare an instance of the REST module
const rest = new REST().setToken(token);

// deployment mode: GLOBAL
(async () => {
	try {

		//clear all previous commands
		console.log('clearing all associated commands.')
		const data = await rest.put(
			Routes.applicationCommands(clientId),
			{ body: [] },
		);

		console.log(`cleared all commands.`);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();