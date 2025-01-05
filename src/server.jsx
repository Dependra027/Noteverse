const express = require('express');
const multer = require('multer');
const { firestore, bucket } = require('./components/firebase');
require('dotenv').config();

const app = express();
app.use(express.json());


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


app.post('/uploadNote', upload.single('noteFile'), async (req, res) => {
    try {
        const file = req.file;
        const fileName = `${Date.now()}_${file.originalname}`;
        const fileUpload = bucket.file(`notes/${fileName}`);

        
        const stream = fileUpload.createWriteStream({
            metadata: {
                contentType: file.mimetype
            }
        });

        stream.on('error', (err) => {
            res.status(500).json({ error: 'Error uploading file', details: err.message });
        });

        stream.on('finish', async () => {
          
            await fileUpload.makePublic();

           
            const fileURL = `https://storage.googleapis.com/${bucket.name}/notes/${fileName}`;
            const newNote = {
                subject: req.body.subject,
                category: req.body.category,
                fileURL: fileURL,
                uploadedBy: req.body.uploadedBy,
                timestamp: new Date()
            };

            await firestore.collection('notes').add(newNote);
            res.status(200).json({ message: 'Note uploaded successfully', note: newNote });
        });

        stream.end(file.buffer);
    } catch (err) {
        res.status(500).json({ error: 'Error uploading note', details: err.message });
    }
});


app.get('/notes', async (req, res) => {
    try {
        const snapshot = await firestore.collection('notes').get();
        const notes = snapshot.docs.map(doc => doc.data());
        res.status(200).json(notes);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching notes', details: err.message });
    }
});


app.post('/searchNotes', async (req, res) => {
    try {
        const { keyword } = req.body;
        const snapshot = await firestore.collection('notes')
            .where('subject', '>=', keyword)
            .get();

        const notes = snapshot.docs.map(doc => doc.data());
        res.status(200).json(notes);
    } catch (err) {
        res.status(500).json({ error: 'Error searching notes', details: err.message });
    }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
