const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  courseName: { type: String, required: true },
  comments: { type: String, required: true },
  rating: { type: Number, required: true },
  duration: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Feedback', feedbackSchema);
