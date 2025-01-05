import React, { useState } from 'react';
import './Feedback.css';

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const feedbackData = {
      name,
      email,
      feedback,
    };

    try {
      const response = await fetch('/api/send-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedbackData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Thank you for your feedback!");
        setFeedback("");
        setName("");
        setEmail("");
      } else {
        setMessage("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("Error submitting feedback. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="feedback-container">
      <section className="feedback-header">
        <h1>Give Us Your Feedback</h1>
        <p>Your thoughts and suggestions are valuable to us!</p>
      </section>

      <section className="feedback-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name:</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={handleNameChange} 
            required
          />

          <label htmlFor="email">Your Email:</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={handleEmailChange} 
            required
          />

          <label htmlFor="feedback">Your Feedback:</label>
          <textarea 
            id="feedback" 
            value={feedback} 
            onChange={handleFeedbackChange} 
            required
          />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
          </button>
        </form>

        {message && <p className="feedback-message">{message}</p>}
      </section>
    </div>
  );
};

export default Feedback;
