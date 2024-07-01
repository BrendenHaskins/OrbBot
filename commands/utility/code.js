const { SlashCommandBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require('discord.js');
const fontUtil = require('./helpers/fontUtilities.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('code')
		.setDescription('formats a code segment'),

	async execute(interaction) {
		if(interaction.isCommand()) {
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

			modal.addComponents(firstActionRow, secondActionRow);

			await interaction.showModal(modal);


			const filter = (interaction) => interaction.customId === 'codeModal';
			interaction.awaitModalSubmit({ time: 60_000, filter })
				.then(interaction => interaction.reply(fontUtil.convertToMarkdown(
					interaction.fields.getTextInputValue('codeInput'),
					interaction.fields.getTextInputValue('codeInput')
				)));

		}
	},
};