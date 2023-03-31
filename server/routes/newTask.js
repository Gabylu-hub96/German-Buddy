const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

router.post("/tasks", async (req, res) => {
  const { name, description } = req.body;

  const newTask = new Task({
    name,
    description,
  });

  try {
    const savedTask = await newTask.save();
    res.json(savedTask);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
