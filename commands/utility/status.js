const { SlashCommandBuilder } = require('discord.js');
const fontUtil = require('./helpers/fontUtilities.js');

module.exports = {
	//data: define the command and it's attributes
	data: new SlashCommandBuilder() // /font font (required):	message(required): 
		.setName('status')
		.setDescription('shows your status'),

		
	//execute(): handle the interaction
	async execute(interaction) {
		//read user input
		const status = interaction.member.user.client.presence.status;
		


		await interaction.reply(status);
	},
};