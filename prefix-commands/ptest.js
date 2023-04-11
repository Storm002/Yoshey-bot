const { EmbedBuilder } = require("discord.js");

module.exports = {
  prefixMessage(message, prefix) {
    // prfixMessageCall should be for all messages
    if (message.content === prefix + "ptest") {
      const ptest = new EmbedBuilder()
        .setColor("#00FF00")
        .setTitle(`test!!!!!!!!!!!!`)
        .setTimestamp();
      message.channel.send({ embeds: [ptest] });
    }
  },
};
