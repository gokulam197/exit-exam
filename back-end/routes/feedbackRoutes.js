const express = require('express');
const Feedback = require('../models/Feedback');
const router = express.Router();

// GET all feedback
router.get('/', async (req, res) => {
  const feedbacks = await Feedback.find();
  res.json(feedbacks);
});

// POST new feedback
router.post('/', async (req, res) => {
  const { courseName, comments, rating, duration } = req.body;
  const newFeedback = new Feedback({ courseName, comments, rating, duration });
  await newFeedback.save();
  res.json(newFeedback);
});

// PUT update feedback
router.put('/:id', async (req, res) => {
  const updatedFeedback = await Feedback.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedFeedback);
});

// DELETE feedback
router.delete('/:id', async (req, res) => {
  await Feedback.findByIdAndDelete(req.params.id);
  res.json({ message: 'Feedback deleted successfully' });
});

module.exports = router;
