const { SlashCommandBuilder } = require('discord.js');
const fontUtil = require('./helpers/fontUtilities.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('code')
		.setDescription('Alters message to appear as code')

		
		.addStringOption(option =>
			option
				.setName('text')
				.setDescription('text to alter')
				.setRequired(true)
		),
		
	async execute(interaction) {
		const text = interaction.options.getString('text');
		const response = "```" + text + "```";
		


		await interaction.reply(response);
	},
};