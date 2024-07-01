const { SlashCommandBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require('discord.js');
const fontUtil = require('./helpers/fontUtilities.js');

module.exports = {
	//data: define the command and it's attributes
	data: new SlashCommandBuilder()// /code modal-> language:	 code(required):
		.setName('code')
		.setDescription('formats a code segment'),
	
	//execute(): handle the interaction
	async execute(interaction) {
		//define a modal
		const modal = new ModalBuilder()
			.setCustomId('codeModal')
			.setTitle('Format Code Segment');

		const languageInput = new TextInputBuilder()
			.setCustomId('languageInput')
			.setLabel('Programming Language')
			.setPlaceholder('What Language are you using?')
			.setStyle(TextInputStyle.Short);
		
		const codeInput = new TextInputBuilder()
			.setCustomId('codeInput')
			.setLabel('Code')
			.setPlaceholder("Your code here...")
			.setRequired(true)
			.setStyle(TextInputStyle.Paragraph);

		const firstActionRow = new ActionRowBuilder().addComponents(languageInput);
		const secondActionRow = new ActionRowBuilder().addComponents(codeInput);

		//add both defined action rows to the modal
		modal.addComponents(firstActionRow, secondActionRow);
		
		await interaction.showModal(modal);

		//format the modal response
		const filter = (interaction) => interaction.customId === 'codeModal';
		interaction.awaitModalSubmit({ time: 60_000, filter })
			.then(interaction => interaction.reply(fontUtil.convertToMarkdown(
				interaction.fields.getTextInputValue('codeInput'),
				interaction.fields.getTextInputValue('languageInput')
			)));

		
	},
};