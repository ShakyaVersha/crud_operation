const express = require('express')
const router = express.Router();
const user = require('../models/users')

//create method define

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newUser = new user(data);
    const response = await newUser.save();

    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "invalide server error" });
  }
});

//update method define

router.put("/:id", async (req, res) => {
  try {
    const userid = req.params.id;
    const updated_user = req.body;
    const response = await user.findByIdAndUpdate(userid, updated_user, {
      new: true,
      runValidators: true,
    });
    if (!response) {
      return res.status(404).json({ massage: "user is not found" });
    }

    console.log("data updated");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "invalide server error" });
  }
});

//delete method define

router.delete("/:id", async (req, res) => {
  try {
    const userid = req.params.id;
    const response = await user.findByIdAndDelete(userid);
    console.log("data is deleted");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "invalide server error" });
  }
});
//read method define

router.get("/", async (req, res) => {
  try {
    const response = await user.find();
    console.log("data fatched");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "invalide server error" });
  }
});

module.exports = router;