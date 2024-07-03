const { SlashCommandBuilder } = require('discord.js');
const leetcodeUtil = require('./helpers/leetcodeUtilities.js');


module.exports = {
	//data: define the command and it's attributes
	data: new SlashCommandBuilder() // /leetcode problem-number (required): 
		.setName('leetcode')
		.setDescription('fetches a leetcode problem')

		.addIntegerOption(option =>
			option
				.setName('number')
				.setDescription('desired problem number')
				.setRequired(true)
                .setMaxValue(2_500)
                .setMinValue(1)
        ),
	//execute(): handle the interaction
	async execute(interaction) {
		//read user input
		const number = interaction.options.getInteger('number');
		const message =  await leetcodeUtil.executeIdToSlug(number);
		await interaction.reply("https://leetcode.com/problems/"+message+"/description/");
	},
};