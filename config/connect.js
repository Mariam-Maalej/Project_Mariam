const mongoose = require("mongoose");
const config = require("config");
const connect = () => {
  mongoose
    .connect(config.get("MONGO_URI"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => console.log("connected to database"))
    .catch((err) => console.log("failed to connect to database", err));
};

module.exports = connect;
