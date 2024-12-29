import React, { useEffect, useState } from 'react';
import { getFeedbacks, deleteFeedback } from '../api/feedbackApi';
import FeedbackItem from './FeedbackItem';

function FeedbackDashboard() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getFeedbacks();
      setFeedbacks(data);
    }
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await deleteFeedback(id);
    setFeedbacks(feedbacks.filter((feedback) => feedback._id !== id));
  };

  return (
    <div>
      <h2>Feedback Dashboard</h2>
      {feedbacks.map((feedback) => (
        <FeedbackItem key={feedback._id} feedback={feedback} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default FeedbackDashboard;
