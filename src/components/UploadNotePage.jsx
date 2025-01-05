import { useState } from 'react';
import { storage } from '../firebase'; 
import { ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid'; 

const UploadNotePage = () => {
  const [subject, setSubject] = useState('');
  const [category, setCategory] = useState('');
  const [fileUpload, setFileUpload] = useState(null); 

  const handleUpload = async (e) => {
    e.preventDefault();
    
    
    if (!fileUpload) {
      alert("Please select a file to upload.");
      return;
    }

    try {
    
      const fileRef = ref(storage, `File/${fileUpload.name + uuidv4()}`);
      
    
      await uploadBytes(fileRef, fileUpload);
      
      
      setSubject('');
      setCategory('');
      setFileUpload(null);
      alert("Your note has been uploaded successfully!"); 
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Error uploading file. Please try again.");
    }
  };

  return (
    <div style={{ padding: '40px', backgroundColor: '#1e1e1e', borderRadius: '10px', maxWidth: '500px', margin: 'auto', color: '#fff', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px', fontFamily: 'Orbitron, sans-serif' }}>Upload Your Note</h1>
      <form onSubmit={handleUpload} style={{ display: 'flex', flexDirection: 'column' }}>
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          style={{
            marginBottom: '15px',
            padding: '12px',
            borderRadius: '5px',
            border: '1px solid #333',
            backgroundColor: '#2b2b2b',
            color: '#fff',
            fontSize: '16px',
            transition: 'border-color 0.3s',
          }}
          onFocus={(e) => (e.target.style.borderColor = '#00f260')}
          onBlur={(e) => (e.target.style.borderColor = '#333')}
        />
        
       
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          style={{
            marginBottom: '15px',
            padding: '12px',
            borderRadius: '5px',
            border: '1px solid #333',
            backgroundColor: '#2b2b2b',
            color: '#fff',
            fontSize: '16px',
            transition: 'border-color 0.3s',
          }}
          onFocus={(e) => (e.target.style.borderColor = '#00f260')}
          onBlur={(e) => (e.target.style.borderColor = '#333')}
        >
          <option value="" disabled>Select Category</option>
          <option value="10th">10th</option>
          <option value="11th">11th</option>
          <option value="12th">12th</option>
          <option value="BTech CSE">BTech CSE</option>
          <option value="BTech ECE">BTech ECE</option>
          <option value="BTech Mechanical">BTech Mechanical</option>
          <option value="BTech Civil">BTech Civil</option>
          <option value="BBA">BBA</option>
          <option value="MBA">MBA</option>
          <option value="JEE">JEE</option>
          <option value="NEET">NEET</option>
          <option value="CAT">CAT</option>
          <option value="UPSC">UPSC</option>
        </select>

        <input
          type="file"
          onChange={(event) => setFileUpload(event.target.files[0])}
          required
          style={{
            marginBottom: '15px',
            padding: '12px',
            borderRadius: '5px',
            border: '1px solid #333',
            backgroundColor: '#2b2b2b',
            color: '#fff',
            fontSize: '16px',
          }}
        />
        <button type="submit" style={{
          padding: '12px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '18px',
          transition: 'background-color 0.3s',
        }}>
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadNotePage;
