import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db/db.js';
import Form from './models/form_model.js';

dotenv.config();
const app = express();
const PORT =  8000;

app.use(cors());
app.use(express.json());

connectDB()

app.post('/forms', async (req, res) => {
    try {
        const form = new Form(req.body);
        await form.save();
        return res.status(200).json({ message: 'Form data saved successfully' });
    } catch (error) {
        console.error('Error processing form data:', error);
        return res.status(500).json({ message: 'Server error' });
    }
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});