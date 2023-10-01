const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    user_name: {
      type: String,
      required: true,
    },
    channel_id: {
      type: String,
      required: true,
    },
    guild_id: {
      type: String,
      required: true,
    },
    points: {
      type: Number,
      required: true,
    },
    rank: {
      type: Number,
      required: true,
    },
    last_points_msg_id: {
      type: String,
      required: true,
    },
    last_points_msg_time: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;
