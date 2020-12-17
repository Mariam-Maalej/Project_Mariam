const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HikeSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    },
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
      text: {
        type: String,
        required: true,
      },
      firstName: {
        type: String,
      },
      lastName: {
        type: String,
      },
    },
  ],
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  phone: {
    type: Number,
  },
  imgURL: { type: String, required: true },
  title: { type: String, required: true },
  destination: { type: String, required: true },
  desc: { type: String, required: true },
  difficulty: {
    type: String,
    enum: ["Easy", "Average", "Difficult"],
  },
  date: { type: String, required: true },
  duration: { type: String, required: true },
  price: { type: Number, required: true },
  nbPlaces: { type: Number, required: true },
  leftPlaces: {
    type: Number,
    required : false
  },
  bookings: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
      fullName: {
        type: String,
        required: true,
      },
      phone: {
        type: Number,
        required: true,
      },
      place: {
        type: Number,
        required: true,
      },
    },
  ],
});

module.exports = Hike = mongoose.model("Hike", HikeSchema);
