const { EmbedBuilder } = require("discord.js");

module.exports = {
  ptest(message, prefix) {
    if (message.content === prefix + "ptest") {
      const ptest = new EmbedBuilder()
        .setColor("#00FF00")
        .setTitle(`test!!!!!!!!!!!!`)
        .setTimestamp();
      message.channel.send({ embeds: [ptest] });
    }
  },
};
