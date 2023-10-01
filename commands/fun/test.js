const { SlashCommandBuilder } = require("discord.js");
const User = require("../../db/user");
module.exports = {
  data: new SlashCommandBuilder().setName("test").setDescription("Testing"),
  async execute(interaction) {
    try {
      const res = await User.findById(interaction.user.id);

      console.log("pp:", res.points);
      return interaction.reply(`Pong! ${res.points} !!!!!!`);
    } catch (e) {
      console.log(e.message);
    }
  },
};
