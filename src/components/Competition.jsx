import React from 'react';
import './Competition.css';
import { Link } from 'react-router-dom';

const CompetitionNotes = () => {
  const notes = [
    {
      grade: "COLLEGES",
      title: "IIT, NEET...",
      description: "All notes related to colleges.",
      image: "https://bl-i.thgim.com/public/news/xe4vo3/article66182896.ece/alternates/FREE_1200/IIT%20Roorkee%20Campus.jpeg",
      link: "/Colleges",
    },
    {
      grade: "DEFENCE",
      title: "NDA, CDS...",
      description: "Go, and Find your Branch Notes!",
      image: "https://1.bp.blogspot.com/-jKCV0iVZblA/Xb1V1dldnsI/AAAAAAAAAJw/babWLAp7-_UT_brEmW0JUC9b9XhN3h88gCLcBGAsYHQ/s1600/236172-nda-army-1024x1024.jpg",
      link: "/Defence",
    },
    {
      grade: "UPSC",
      title: "IAS, IPS, INCOMETAX...",
      description: "Grab your UPSC Notes here!",
      image: "https://www.logicallyfacts.com/storage/img/pages/8db99932-5e9b-4595-bb67-26311ff0eb66_background.webp",
      link: "/UPSC",
    },
    {
      grade: "CA",
      title: "BCOM, BBA, MCOM...",
      description: "Grab your notes related to Commerce.",
      image: "https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Student-3-512.png",
      link: "/CA",
    },
  ];

  return (
    <div className="competition-notes" id="Competition-notes">
      <h2 className="heading">Competition Notes<span style={{ color: 'red', fontSize: '20px' }}><br></br>( Not operable for now )</span></h2>

      <div className="notes-container">
        {notes.map((note, index) => (
          <Link to={note.link} key={index} className="note-card-link">
            <div className="note-card">
              <img src={note.image} alt={note.title} className="note-image" />
              <div className="note-content">
                <h3>{note.grade}</h3>
                <h4>{note.title}</h4>
                <p>{note.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CompetitionNotes;
