const express = require("express");
const axios = require("axios");
const Quiz = require("../models/Quiz");

const router = express.Router();


router.get("/fetch", async (req, res) => {
  try {
    const response = await axios.get("https://api.jsonserve.com/Uw5CrX");
    await Quiz.deleteMany({});
    await Quiz.insertMany(response.data);
    res.json({ message: "Quiz data updated successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error fetching quiz data." });
  }
});


router.get("/", async (req, res) => {
  try {
    const questions = await Quiz.find();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving quiz data." });
  }
});

module.exports = router;