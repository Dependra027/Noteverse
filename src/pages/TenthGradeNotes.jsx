import React, { useEffect, useState } from 'react';
import { collection, query, where, onSnapshot } from 'firebase/firestore'; // Import Firestore functions
import { db } from '../firebase'; // Ensure the correct path to your Firebase config

const TenthGradeNotes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch notes from Firestore with category '10th'
  const fetchNotes = () => {
    const q = query(collection(db, 'uploads'), where('category', '==', '10th'));

    // Use onSnapshot for real-time updates
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const notesList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setNotes(notesList);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching 10th grade notes: ", error);
      setLoading(false);
    });

    // Clean up the listener on unmount
    return () => unsubscribe();
  };

  // Fetch notes when the component mounts
  useEffect(() => {
    fetchNotes();
  }, []);

  if (loading) {
    return <p style={{ textAlign: 'center', color: '#fff' }}>Loading 10th grade notes...</p>;
  }

  return (
    <div style={{ padding: '40px', backgroundColor: '#1e1e1e', borderRadius: '10px', maxWidth: '800px', margin: 'auto', color: '#fff' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px', fontFamily: 'Orbitron, sans-serif' }}>10th Grade Notes</h1>
      {notes.length > 0 ? (
        <div>
          {notes.map((note) => (
            <div key={note.id} style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#2b2b2b', borderRadius: '5px' }}>
              <h3>{note.subject}</h3>
              <p>Category: {note.category}</p>
              <a href={note.fileURL} target="_blank" rel="noopener noreferrer" style={{ color: '#00f260' }}>
                Download {note.subject} Notes
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p>No notes available for 10th grade yet.</p>
      )}
    </div>
  );
};

export default TenthGradeNotes;
