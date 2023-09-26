const { EmbedBuilder } = require("discord.js");

module.exports = {
  urls: [
    "https://static.tumblr.com/58d9c77e9619492c680de2a9772bcb51/txjgy5i/2HNoujzqj/tumblr_static_tumblr_static__focused_v3.gif",
    "https://media3.giphy.com/media/khl6RE8XNiwxstKNzE/giphy.gif",
    "https://i.gifer.com/tUE.gif",
    "https://static.wikia.nocookie.net/9d99e7b9-2974-4e50-9e57-bca2eadc5824/scale-to-width/755",
    "https://cdnb.artstation.com/p/assets/images/images/018/787/989/original/aly-el-din-sakr-test-idle-1.gif?1560737992",
  ],

  prefixMessage(message, prefix) {
    // prfixMessageCall should be for all messages
    if (message.content === prefix + "ptest2") {
      const ptest = new EmbedBuilder()
        .setColor("#00FFFF")
        .setTitle(`@@@@@2222test!!!!!!!!!!!!`)
        .setTimestamp()
        .setImage(this.urls[Math.floor(Math.random() * 4)]);
      message.channel.send({ embeds: [ptest] });
    }
  },
};
