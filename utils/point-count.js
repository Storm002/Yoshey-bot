const User = require("../db/user");

module.exports = async function countPoints(message) {
  let points;
  let msgId;
  let msgTime;
  let rank;
  try {
    const user = await User.findById(message.author.id);
    if (user) {
      user.points >= 100 && user[0].points < 200
        ? (rank = 1)
        : user.points >= 200 && user.points < 300
        ? (rank = 2)
        : user.points >= 300 && user.points < 400
        ? (rank = 3)
        : user.points >= 400 && user.points < 500
        ? (rank = 4)
        : user.points >= 500
        ? (rank = 5)
        : (rank = 0);
      if (message.createdTimestamp - user.last_points_msg_time > 10000) {
        points = user.points + 10;
        msgId = message.id;
        msgTime = message.createdTimestamp;
      } else {
        points = user.points;
        msgId = user.last_points_msg_id;
        msgTime = user.last_points_msg_time;
      }
      await User.findByIdAndUpdate(user._id, {
        _id: message.author.id,
        user_name: message.author.username,
        channel_id: message.channelId,
        guild_id: message.guildId,
        points: points,
        last_points_msg_id: msgId,
        last_points_msg_time: msgTime,
        rank: rank,
      });
    } else {
      points = 10;
      msgId = message.id;
      msgTime = message.createdTimestamp;
      rank = 0;
      await User.create({
        _id: message.author.id,
        user_name: message.author.username,
        channel_id: message.channelId,
        guild_id: message.guildId,
        points: points,
        last_points_msg_id: msgId,
        last_points_msg_time: msgTime,
        rank: rank,
      });
    }
  } catch (e) {
    console.log(e.message);
  }
};
