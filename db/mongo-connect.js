const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then((res) => {
    console.log("DB connected");
  })
  .catch((err) => console.log("err", err));

module.exports = mongoose.connection;
