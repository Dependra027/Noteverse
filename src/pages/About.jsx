import React from 'react';
import './About.css'; // Import the CSS for styling

const About = () => {
  return (
    <div className="about-container">
      <section className="about-header">
        <h1>About Us</h1>
        <p>Welcome to NoteVerse</p>
      </section>

      <section className="about-content">
        <div className="about-description">
          <h2>What We Offer</h2>
          <p>
            Welcome to <u><strong>NoteVerse</strong></u>, a revolutionary platform that brings educational resources at your fingertips. Whether you're a student preparing for school exams or aiming for success in competitive exams, NoteVerse provides a wide range of notes and books to help you achieve your academic goals.
          </p>
          <p>
            Founded by <strong>Dependra Singh</strong>, NoteVerse is committed to curating high-quality, relevant, and comprehensive study materials, from <strong>class 10 to competitive exam level</strong>. Our resources are crafted with precision and care, ensuring that every note or guide is clear, concise, and beneficial for your learning journey.
          </p>
        </div>

        <div className="about-advantages">
          <h3>Advantages of Using NoteVerse</h3>
          <ul>
            <li><strong>Free Access</strong> - All our resources are freely accessible, enabling students to study without worrying about expensive textbooks or study materials.</li>
            <li><strong>Comprehensive Coverage</strong> - From high school textbooks to competitive exam papers, our materials cover a wide range of topics.</li>
            <li><strong>Collaboration and Community</strong> - Users can contribute their own materials, enhancing the platform's diversity.</li>
            <li><strong>Quality Assurance</strong> - We meticulously review and organize all uploaded content for accuracy and clarity.</li>
            <li><strong>Stay Updated</strong> - New materials are constantly added to ensure users have the latest notes and study guides.</li>
          </ul>
        </div>

        <div className="about-footer">
          <h3>Why Choose NoteVerse?</h3>
          <p>
            Whether you're revising for school exams, preparing for a competitive entrance exam, or seeking additional resources, NoteVerse is a one-stop solution for all your academic needs. Our website is designed for ease of use, offering secure, free, and accessible educational content to empower learners worldwide.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
