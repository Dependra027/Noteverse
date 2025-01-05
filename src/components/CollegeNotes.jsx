import React from 'react';
import './CollegeNotes.css';
import { Link } from 'react-router-dom';

const CollegeNotes = () => {
  const notes = [
    {
      grade: "ENGINEERING",
      title: "Btech, Mtech, MBA, MS, ..",
      description: "Go, and Find your Branch Notes!.",
      image: "https://img.freepik.com/premium-photo/blue-robot-head-with-face-middle_894855-1321.jpg",
      link: "/Engineering",
    },
    {
        grade: "MEDICAL",
        title: "MBBS, MD, BPharma",
        description: "Grab your Medical Notes here!",
        image: "https://th.bing.com/th/id/OIP.iXXHV8Ayq-zEWkS5PRUCeAAAAA?rs=1&pid=ImgDetMain",
      },
      {
        grade: "COMMERCE",
        title: "BCOM,BBA, MCOM,....",
        description: "Grab Your notes relate to Commerce.",
        image: "https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Student-3-512.png",
      },
    {
      grade: "ARTS",
      title: "BA, MA,... ",
      description: "All notes related To Arts.",
      image: "https://th.bing.com/th/id/OIP.xZihVj5RxsB1005Wxp0mAAHaHa?rs=1&pid=ImgDetMain",
    },
   
    

      
  ];

  return (
    <div className="school-notes" id="College-notes">
      <h2 className="heading">College Notes</h2>
      <div className="notes-container">
        {notes.map((note, index) => (
          <div key={index} className="note-card">
            <img src={note.image} alt={note.title} className="note-image" />
            <div className="note-content">
              <h3>{note.grade}</h3>
              <h4>{note.title}</h4>
              <p>{note.description}</p>
              {note.link && (
                <Link to={note.link} className="note-link">View Notes</Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollegeNotes;