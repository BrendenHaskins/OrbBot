const { SlashCommandBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const fontUtil = require('./helpers/fontUtilities.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('code')
		.setDescription('formats a code segment'),

	async execute(interaction) {
		const modal = new ModalBuilder()
		.setCustomId('codeModal')
		.setTitle('Format Code Segment');

		const languageInput = new TextInputBuilder()
			.setCustomId('codeLanguage')
			.setLabel('Programming Language')
			.setPlaceholder('What Language are you using?')
			.setStyle(TextInputStyle.Short);
		
		const codeInput = new TextInputBuilder()
			.setCustomId('codeBody')
			.setLabel('Code')
			.setPlaceholder("Your code here...")
			.setRequired(true)
			.setStyle(TextInputStyle.Paragraph);

		const firstActionRow = new ActionRowBuilder().addComponents(languageInput);
		const secondActionRow = new ActionRowBuilder().addComponents(codeInput);

		await interaction.showModal(modal);



		const language = interaction.fields.getTextInputValue('languageInput') ?? false;
		const body = interaction.fields.getTextInputValue('codeInput');

		await interaction.reply(fontUtil.convertToMarkdown(text,language));
	},
};