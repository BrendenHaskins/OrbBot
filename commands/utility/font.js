const { SlashCommandBuilder } = require('discord.js');
const fontUtil = require('./helpers/fontUtilities.js');

module.exports = {
	//data: define the command and it's attributes
	data: new SlashCommandBuilder() // /font font (required):	message(required): 
		.setName('font')
		.setDescription('changes the font of a message')

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
		
	//execute(): handle the interaction
	async execute(interaction) {
		//read user input
		const font = interaction.options.getString('font');
		const message = interaction.options.getString('message');

	
		const response = fontUtil.changeFont(message, font);
		


		await interaction.reply(response);
	},
};