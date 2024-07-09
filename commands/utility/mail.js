const { Client, SlashCommandBuilder } = require('discord.js');

module.exports = {
	//data: define the command and it's attributes
	data: new SlashCommandBuilder() // /font font (required):	message(required): 
		.setName('mail')
		.setDescription('send mail to another server'),

		
	//execute(): handle the interaction
	async execute(interaction) {
		//read user input
		const senderChannelId = interaction.guildId ?? "no sending guild id";
        const senderChannel = interaction.guild ?? "no sending guild name";
        const senderMember = interaction.member ?? "no sending member";

        const output = `${senderChannelId} + ${senderChannel} + ${senderMember}`;

		


		await interaction.reply(output);
	},
};