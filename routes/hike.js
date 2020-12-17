const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Hike = require("../models/Hike");
const User = require("../models/User");
const { check, validationResult } = require("express-validator");
const checkObjectId = require("../middleware/checkObjectId");

//Add Hike
//path : /camp/addHike
router.post(
  "/addHike",
  [
    auth,
    [
      check("destination", "field required").not().isEmpty(),
      check("title", "field required").not().isEmpty(),
      check("price", "field required").not().isEmpty(),
      check("nbPlaces", "field required").not().isEmpty(),
      check("imgURL", "field required").not().isEmpty(),
      check("destination", "field required").not().isEmpty(),
      check("desc", "field required").not().isEmpty(),
      check("date", "field required").not().isEmpty(),
      check("duration", "field required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      imgURL,
      title,
      destination,
      desc,
      difficulty,
      date,
      duration,
      price,
      nbPlaces,
      leftPlaces,
    } = req.body;

    try {
      const user = await User.findById(req.user.id).select("-password");
      const newHike = await new Hike({
        imgURL,
        title,
        destination,
        desc,
        difficulty,
        date,
        duration,
        price,
        nbPlaces,
        leftPlaces,
        user: req.user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
      });
      newHike.save();
      res.send(newHike);
      //res.status(200).json({ msg: "Added" });
    } catch (err) {
      console.log("Add failed", err);
      res.status(400).json({ msg: "Add failed" });
    }
  }
);
//Show all hikes
//path : /camp/showAll
router.get("/showAll", async (req, res) => {
  try {
    const allHikes = await Hike.find();
    res.send(allHikes);
  } catch (err) {
    console.log("Failed to show all hikes", err);
    res.status(400).json({ msg: "Failed to show all hikes" });
  }
});
//Update Hike by id
//path : /camp/editHike/:_id
router.put("/editHike/:_id", async (req, res) => {
  const {
    imgURL,
    title,
    destination,
    desc,
    difficulty,
    date,
    duration,
    price,
    nbPlaces,
  } = req.body;
  const { _id } = req.params;
  try {
    const updated = await Hike.findOneAndUpdate({ _id }, { $set: req.body });
    res.send(updated);
  } catch (err) {
    console.log("Failed to update", err);
    res.status(400).json({ msg: "Failed to update" });
  }
});
//Delete hike
//path : /camp/deleteHike/_id
router.delete("/deleteHike/:_id", async (req, res) => {
  const { _id } = req.params;
  try {
    const deleted = await Hike.findOneAndDelete({ _id });
    res.send(deleted);
    // res.status(201).json({ msg: "Deleted with succes" });
  } catch (err) {
    console.log("Delete failed", err);
    res.status(400).json({ msg: "Delete failed" });
  }
});
//Delete all hikes
//path : /camp/deleteAll
router.delete("/deleteAll", async (req, res) => {
  try {
    const delAll = await Hike.remove();
    res.send(delAll);
  } catch (error) {
    res.status(400).json({ msg: "Delete failed" });
  }
});

//Add like
//path : /camp/like/:_id
router.put("/like/:id", auth, async (req, res) => {
  try {
    const hike = await Hike.findById(req.params.id);
    // Check if the hike has already been liked
    if (
      hike.likes.filter((like) => like.user.toString() === req.user.id).length >
      0
    ) {
      return res.status(400).json({ msg: "Hike already liked" });
    }
    hike.likes.unshift({ user: req.user.id });
    await hike.save();
    return res.json(hike.likes);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

//Unlike a hike
//path : /camp/unlike/:id
router.put("/unlike/:id", auth, async (req, res) => {
  try {
    const hike = await Hike.findById(req.params.id);

    // Check if the hike is not yet liked
    if (
      hike.likes.filter((like) => like.user.toString() === req.user.id)
        .length === 0
    ) {
      return res.status(400).json({ msg: "Hike not yet liked" });
    }

    //Get remove index
    const removeIndex = hike.likes
      .map((like) => like.user.toString())
      .indexOf(req.user.id);
    hike.likes.splice(removeIndex, 1);

    await hike.save();

    return res.json(hike.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//Add a comment
//path : /camp/addComm/:id
router.post(
  "/addComm/:id",
  [auth, [check("text", "text is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await User.findById(req.user.id).select("-password");
      const hike = await Hike.findById(req.params.id);
      const newComment = {
        text: req.body.text,
        firstName: user.firstName,
        lastName: user.lastName,
        user: req.user.id,
      };
      hike.comments.unshift(newComment);
      await hike.save();
      res.json(hike.comments);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server error");
    }
  }
);

//Delete comment
//path : /camp/delComment/:comment_id
router.delete("/delComment/:id/:comment_id", auth, async (req, res) => {
  try {
    const hike = await Hike.findById(req.params.id);
    const comment = hike.comments.find(
      (comment) => comment.id === req.params.comment_id
    );
    if (!comment) {
      return res.status(404).json({ msg: "Comment does not exist" });
    }
    if (comment.user.toString() !== req.user.id) {
      return res.status(404).json({ msg: "User not authorized" });
    }
    //Get remove index
    const removeIndex = hike.comments
      .map((comment) => comment.user.toString())
      .indexOf(req.user.id);
    hike.comments.splice(removeIndex, 1);

    await hike.save();

    res.send(hike.comments);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server error");
  }
});
//Make a reservation
//path : camp/addBooking/:id
router.post(
  "/addBooking/:id",
  [
    auth,
    [
      check("fullName", "field required").not().isEmpty(),
      check("place", "field required").not().isEmpty(),
      check("phone", "field required").not().isEmpty(),
    ],
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { fullName, place, phone } = req.body;
    try {
      const user = await User.findById(req.user.id).select("-password");
      const hike = await Hike.findById(req.params.id);
      const newBooking = {
        fullName,
        place,
        phone,
        user: req.user.id,
        hike: req.params.id,
      };
      const nbPlaces = hike.nbPlaces;
      let leftPlaces = hike.leftPlaces;
      if (leftPlaces === 0) {
        res.send("No places left");
      } else if (leftPlaces < place) {
        res.send("no enough places");
      } else {
        leftPlaces = leftPlaces - place;
      }
      hike.leftPlaces === leftPlaces;
      hike.bookings.unshift(newBooking);
      await hike.save();
      res.send(hike.bookings);
    } catch (error) {
      console.log("Booking failed", error);
      res.status(400).json({ msg: "Booking failed" });
    }
  }
);

//get all reservations for one hike
// path : /camp/allBookings/:id
router.get("/allBookings/:id", auth, async (req, res) => {
  try {
    const hike = await Hike.findById(req.params.id);
    res.send(hike.bookings);
  } catch (err) {
    console.log("Failed to show all bookings", err);
    res.status(400).json({ msg: "Failed to show all bookings" });
  }
});

//get all comments for one hike
// path : /camp/allComments/:id
router.get("/allComments/:id", auth, async (req, res) => {
  try {
    const hike = await Hike.findById(req.params.id);
    res.send(hike.comments);
  } catch (err) {
    console.log("Failed to show all bookings", err);
    res.status(400).json({ msg: "Failed to show all bookings" });
  }
});

//Cancel booking
//path : cancelBooking/_id
// router.delete("/cancelBooking/:_id", auth, async (req, res) => {
//   const { _id } = req.params;
//   try {
//     const canceled = await Booking.findOneAndDelete({ _id });
//     res.status(200).json({ msg: "deleted with success" });
//   } catch (error) {
//     console.error(error);
//     res.status(400).json({ msg: "failed to cancel booking" });
//   }
// });
module.exports = router;
