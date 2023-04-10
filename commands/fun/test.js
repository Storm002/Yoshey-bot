const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("test").setDescription("Testing"),
  async execute(interaction) {
    return interaction.reply("Pong! !!!!!!");
  },
};
