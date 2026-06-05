import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT;
const atlasURI = process.env.MONGO_URI;



const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('.')); 
app.use(express.urlencoded({ extended: true }));



mongoose.connect(atlasURI)
    .then(() => console.log('Connected to DB'))
    .catch(err => console.error('Database connection failed:', err.message));


const feedbackSchema = new mongoose.Schema({
    name: String,
    feedback: String
});

const Feedback = mongoose.model('Feedback', feedbackSchema);


app.get('/', (req, res) => {
    res.send("API Server is live!");
});


app.post('/addData', async (req, res) => {
    const newFeedback = new Feedback(req.body);
    await newFeedback.save();
    res.json({ message: "Saved" });
});


app.get('/feedback', async (req, res) => {
    const data = await Feedback.find();
    res.json(data);
});


app.delete('/deleteData', async (req, res) => {
    await Feedback.deleteMany({});
    res.json({ message: "Deleted" });
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

