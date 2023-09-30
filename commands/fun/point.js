const { SlashCommandBuilder } = require("discord.js");
const { getById } = require("../../sql-db");
module.exports = {
  data: new SlashCommandBuilder().setName("point").setDescription("Points"),
  async execute(interaction) {
    try {
      const res = await getById(interaction.user.id);
      if (res) {
        return interaction.reply(
          `The points you have ${res[0].points} ${res[0].rank} !!!!!!`
        );
      } else {
        return interaction.reply(`The points you have 0 !!!!!!`);
      }
    } catch (e) {
      console.log(e.message);
    }
  },
};
