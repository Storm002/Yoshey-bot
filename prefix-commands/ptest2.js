const { EmbedBuilder } = require("discord.js");

module.exports = {
  prefixMessage(message, prefix) {
    // prfixMessageCall should be for all messages
    if (message.content === prefix + "ptest2") {
      const ptest = new EmbedBuilder()
        .setColor("#00FFFF")
        .setTitle(`@@@@@2222test!!!!!!!!!!!!`)
        .setTimestamp();
      message.channel.send({ embeds: [ptest] });
    }
  },
};
