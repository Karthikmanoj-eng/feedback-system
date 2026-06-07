const themeToggleBtn = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {

document.body.classList.add("dark-mode");

themeToggleBtn.innerText = "☀️ Light Mode";

}

themeToggleBtn.addEventListener("click", () => {

document.body.classList.toggle("dark-mode");

if (document.body.classList.contains("dark-mode")) {

themeToggleBtn.innerText = "☀️ Light Mode";

localStorage.setItem("theme", "dark");

} else {

themeToggleBtn.innerText = "🌙 Dark Mode";

localStorage.setItem("theme", "light");

}

});







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



app.delete('/deleteData/:id', async (req, res) => {

try {

const { id } = req.params;

await Feedback.findByIdAndDelete(id);

res.json({ message: "Feedback item deleted successfully" });

} catch (error) {

console.error(error);

res.status(500).json({ error: "Something went wrong on the server" });

}

});

app.listen(PORT, () => {

console.log(`Server running on port ${PORT}`);

});