const { SlashCommandBuilder } = require("discord.js");
const User = require("../../db/user");
module.exports = {
  data: new SlashCommandBuilder().setName("point").setDescription("Points"),
  async execute(interaction) {
    try {
      const res = await User.findById(interaction.user.id);
      if (res) {
        return interaction.reply(
          `The points you have ${res.points} Rank: ${res.rank} ${res.user_name} !!!!!!`
        );
      } else {
        return interaction.reply(`The points you have 0 !!!!!!`);
      }
    } catch (e) {
      console.log(e.message);
    }
  },
};
