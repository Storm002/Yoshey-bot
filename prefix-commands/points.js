const { EmbedBuilder } = require("discord.js");
const { getById } = require("../sql-db");

module.exports = {
  async prefixMessage(message, prefix) {
    // prfixMessageCall should be for all messages
    try {
      if (message.content === prefix + "points") {
        const res = await getById(message.author.id);
        const points = new EmbedBuilder()
          .setColor("#00FF00")
          .setTitle(`You have ${res[0].points} pionts!!!`)
          .setTimestamp();
        message.channel.send({ embeds: [points] });
      } else {
        const points = new EmbedBuilder()
          .setColor("#00FF00")
          .setTitle(`You have NO pionts!!!`)
          .setTimestamp();
        message.channel.send({ embeds: [points] });
      }
    } catch (e) {
      console.log(e.message);
    }
  },
};
