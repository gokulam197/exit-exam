import axios from 'axios';

const API_URL = 'http://localhost:5000/api/feedback';

export const getFeedbacks = async () => {
  const { data } = await axios.get(API_URL);
  return data;
};

export const addFeedback = async (feedback) => {
  const { data } = await axios.post(API_URL, feedback);
  return data;
};

export const deleteFeedback = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};



