const { SlashCommandBuilder } = require('discord.js');
const fontUtil = require('./helpers/fontUtilities.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('font')
		.setDescription('Changes the font of a message')
		.addStringOption(option =>
			option.setName('font')
				.setDescription('font desired')
				.setRequired(true)
				.addChoices(
					{name: 'Math Bold Script', value: 'mbs'},
					{name: 'Braille', value: 'brl'}
				)),
	async execute(interaction) {
		const font = interaction.options.getString('font');
		const response = fontUtil.changeFont(interaction.content, font);
		


		await interaction.reply(response);
	},
};