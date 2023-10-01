const { SlashCommandBuilder } = require("discord.js");
const User = require("../../db/user");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("board")
    .setDescription("Leader board"),
  async execute(interaction) {
    try {
      const res = await User.find({}).sort({ points: -1 });
      const board = [];

      if (res) {
        if (res.length <= 10) {
          for (let i = 0; i < res.length; i++) {
            board.push(
              `${i + 1}. ${res[i].user_name} - ${res[i].points} points`
            );
          }
        } else {
          for (let i = 0; i < 10; i++) {
            board.push(
              `${i + 1}. ${res[i].user_name} - ${res[i].points} points`
            );
          }
        }
        return interaction.reply(
          `Leader board:\n${board[0]}\n${board[1]}\n${board[2]}\n${board[3]}\n${board[4]}`
        );
      } else {
        return interaction.reply(`Get users error!!`);
      }
    } catch (e) {
      console.log(e.message);
    }
  },
};
