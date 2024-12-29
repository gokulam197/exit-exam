import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import FeedbackDashboard from './components/FeedbackDashboard';
import AddFeedback from './components/AddFeedback';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<FeedbackDashboard />} />
        <Route path="/add-feedback" element={<AddFeedback />} />
        <Route path="/dashboard" element={<FeedbackDashboard />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;
