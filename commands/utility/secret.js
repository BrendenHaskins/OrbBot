const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('secret')
        .setDescription('OrbBot will tell you a secret'),
        async execute(interaction) {
            await interaction.reply({content: 'I love you bro', ephemeral: true});
        },
};

