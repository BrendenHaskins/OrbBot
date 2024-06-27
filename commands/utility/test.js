const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('Runs a live test of OrbBot'),
        async execute(interaction) {
            await interaction.reply('orb is willing, able, and ready');
        },
};

