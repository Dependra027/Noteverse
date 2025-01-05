// HeroSection.js
import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  const notes = [
    {
      title: "School Notes",
      description: "Comprehensive notes covering Classes 10th, 11th, 12th.",
      image: "/src/assets/download.jpg",
    },
    {
      title: "College Notes",
      description: "Detailed notes on Every Subjects OF College.",
      image: "/src/assets/o.jpg",
    
    },
    {
      title: "DEFENCE Related Notes",
      description: "In-depth notes For Defence Exams Like Nda, Cds, and many more...",
      image: "/src/assets/downloadb.jpg",
    },
    {
      title: "BTech CSE Notes",
      description: "Notes covering algorithms and data structures.",
      image: "/src/assets/downloada.jpg",
    },
  ];
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % notes.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [notes.length]);

  return (
    <>
    <div className="hero-section">
      <div className="hero-slide" style={{ backgroundImage: `url(${notes[currentIndex].image})` }}>
        <div className="hero-content">
          <h2>{notes[currentIndex].title}</h2>
          <p>{notes[currentIndex].description}</p>
        </div>
      </div>
      <div className="hero-indicators">
        {notes.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
     
    </div>
     <div className="hot-topics">
     <h3>HOT TOPICS</h3>
     <div className="card">
       <h4>Latest in Physics</h4>
       <p>Explore the latest theories and discoveries in physics.</p>
     </div>
     <div className="card">
       <h4>Advanced Math Techniques</h4>
       <p>Learn about innovative math techniques to boost your studies.</p>
     </div>
     <div className="card">
       <h4>Chemistry Breakthroughs</h4>
       <p>Discover new chemical compounds and their applications.</p>
     </div>
     <div className="card">
       <h4>Computer Science Trends</h4>
       <p>Stay updated with the latest trends in computer science.</p>
     </div>
   </div>
   </>
  );
};

export default HeroSection;
