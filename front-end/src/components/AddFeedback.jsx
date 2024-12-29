import React, { useState } from 'react';
import { addFeedback } from '../api/feedbackApi';
import './AddFeedback.css'; // Make sure to import the CSS file

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
    <form className="feedback-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          name="courseName"
          className="form-input"
          placeholder="Course Name"
          value={formData.courseName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <textarea
          name="comments"
          className="form-input"
          placeholder="Comments"
          value={formData.comments}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="number"
          name="rating"
          className="form-input"
          placeholder="Rating (1-5)"
          value={formData.rating}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="duration"
          className="form-input"
          placeholder="Duration"
          value={formData.duration}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="submit-button">Add Feedback</button>
    </form>
  );
}

export default AddFeedback;
