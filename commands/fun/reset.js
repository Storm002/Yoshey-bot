const { SlashCommandBuilder } = require("discord.js");
const User = require("../../db/user");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("reset")
    .setDescription("Resets all user points and rank to 0"),
  async execute(interaction) {
    try {
      const isAdmin = await User.findById(interaction.user.id);
      const res = await User.find({});
      if (res && isAdmin._id === "843230826783178762") {
        res.forEach(async (el) => {
          await User.findByIdAndUpdate(el._id, {
            points: 0,
            last_points_msg_id: "",
            last_points_msg_time: "",
            rank: 0,
          });
        });
        return interaction.reply(
          `Reset all user points and rank completed !!!!!!`
        );
      } else {
        return interaction.reply(`Only admin can use reset comand !!!`);
      }
    } catch (e) {
      console.log(e.message);
    }
  },
};
