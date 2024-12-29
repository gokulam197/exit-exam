import React, { useState } from 'react';
import { addFeedback } from '../api/feedbackApi';

function AddFeedback() {
  const [formData, setFormData] = useState({
    courseName: '',
    comments: '',
    rating: 0,
    duration: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addFeedback(formData);
    setFormData({ courseName: '', comments: '', rating: 0, duration: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="courseName" placeholder="Course Name" value={formData.courseName} onChange={handleChange} required /><br />
      <textarea name="comments" placeholder="Comments" value={formData.comments} onChange={handleChange} required></textarea><br />
      <input type="number" name="rating" placeholder="Rating" value={formData.rating} onChange={handleChange} required /><br />
      <input type="text" name="duration" placeholder="Duration" value={formData.duration} onChange={handleChange} /><br />
      <button type="submit">Add Feedback</button>
    </form>
  );
}

export default AddFeedback;
