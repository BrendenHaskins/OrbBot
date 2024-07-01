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
		)

		.addStringOption(option =>
			option
				.setName('language')
				.setDescription('programming language to use')
		),
		
	async execute(interaction) {
		const text = interaction.options.getString('text');
		const language = interaction.option.getString('language') ?? '';
		if(language) {
			const response = fontUtil.convertToMarkdown(text);
		} else {
			const response = fontUtil.convertToMarkdown(text,language);
		}
		


		await interaction.reply(response);
	},
};