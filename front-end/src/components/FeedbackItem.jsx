import React from 'react';

function FeedbackItem({ feedback, onDelete }) {
  return (
    <div>
      <h3>{feedback.courseName}</h3>
      <p>{feedback.comments}</p>
      <p>Rating: {feedback.rating}</p>
      <p>Duration: {feedback.duration}</p>
      <button onClick={() => onDelete(feedback._id)}>Delete</button>
      <button>Update</button>
    </div>
  );
}

export default FeedbackItem;
