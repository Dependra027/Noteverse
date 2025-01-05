import express from 'express';
import { createTransport } from 'nodemailer';
import bodyParser from 'body-parser'; // Import using ES module syntax
import cors from 'cors';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json()); // Use the imported json parser from body-parser

const transporter = createTransport({
  service: 'gmail',
  auth: {
    user: 'dependrasingh027@gmail.com',  // Replace with your Gmail email address
    pass: 'uaqx fdwi camz zfrc',         // Replace with your Gmail password or use an app-specific password
  },
});

// Feedback API endpoint
app.post('/api/send-feedback', (req, res) => {
  const { name, email, feedback } = req.body;

  const mailOptions = {
    from: email,
    to: 'dependrasingh027@gmail.com',
    subject: 'New Feedback from NoteVerse',
    text: `You have received a new feedback from ${name} (${email}):\n\n${feedback}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: 'Error sending email.' });
    }
    res.status(200).json({ message: 'Feedback sent successfully!' });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
