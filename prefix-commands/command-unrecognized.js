const { EmbedBuilder } = require("discord.js");

module.exports = {
  prefixMessage(message, prefix) {
    // prfixMessageCall should be for all messages
    const unrecognized = new EmbedBuilder()
      .setColor("#FF0000")
      .setTitle(`Command < ${message.content} > unrecognized!`);
    message.channel.send({ embeds: [unrecognized] });
  },
};
