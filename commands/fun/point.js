const { SlashCommandBuilder } = require("discord.js");
const { getById } = require("../../sql-db");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("point")
    .setDescription("Testing Points"),
  async execute(interaction) {
    try {
      const res = await getById(interaction.user.id);
      console.log("pp:", res[0].points);
      return interaction.reply(`Pong! ${res[0].points} !!!!!!`);
    } catch (e) {
      console.log(e.message);
    }
  },
};
