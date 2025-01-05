import React from 'react';
import { Link } from 'react-router-dom';
import './SchoolNotes.css';

const SchoolNotes = () => {
  const notes = [
    {
      grade: "10th Grade",
      title: "10th CBSE NOTES",
      description: "Study Material for Class 10th.",
      image: "https://th.bing.com/th/id/OIP.RiseOcheptdmhk0dAnxB-gHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain",
      link: "/10th"
    },
    {
      grade: "11th Grade",
      title: "11th CBSE NOTES",
      description: "Study Material for Class 11th.",
      image: "https://classnotes.pk/wp-content/uploads/2024/03/11th-class.jpg",
      link: "/11th"
    },
    {
      grade: "12th Grade",
      title: "12th CBSE NOTES",
      description: "Study Material for Class 12th.",
      image: "https://classnotes.pk/wp-content/uploads/2024/03/12th-class.jpg",
      link: "/12th"
    },
  ];

  return (
    <div className="school-notes" id="school-notes"> {/* Add id here */}
      <h2 className="heading">School Notes <span style={{ color: 'red',fontSize:'20px' }}>( Not operable for now )</span></h2>

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

export default SchoolNotes;
