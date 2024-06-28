const { SlashCommandBuilder } = require('discord.js');
const fontUtil = require('./helpers/fontUtilities.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('font')
		.setDescription('Changes the font of a message')

		.addStringOption(option =>
			option
				.setName('font')
				.setDescription('font desired')
				.setRequired(true)
				.addChoices(
					{name: 'Math Bold Script', value: 'mbs'},
					{name: 'Braille', value: 'brl'}
				))

		.addStringOption(option =>
			option
				.setName('message')
				.setDescription('message to alter')
				.setRequired(true)
		),
		
	async execute(interaction) {
		const font = interaction.options.getString('font');
		const message = interaction.option.getString('message');
		const response = fontUtil.changeFont(message, font);
		


		await interaction.reply(response);
	},
};