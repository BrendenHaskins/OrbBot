const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('greet')
        .setDescription('Formal Salutations'),
        async execute(interaction) {
            await interaction.reply('Greetings, ${interaction.user.uesername}');
        },
};

