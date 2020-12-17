const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  adress: { type: String, required: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  status: {
    type: String,
    enum: ["Participant", "Guide"],
    default: "Participant",
    required: true,
  },
});

module.exports = User = mongoose.model("User", UserSchema);
