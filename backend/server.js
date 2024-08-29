const express = require('express');
const mongoose = require('mongoose');
const Card = require('./models/Card');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017') 
.then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});

// Ping endpoint
app.get('/ping', (req, res) => {
  res.send('Server is running!');
});

// Create a new card
app.post('/cards', async (req, res) => {
  try {
    const { title, description, link } = req.body;
    const newCard = new Card({ title, description, link });
    await newCard.save();
    res.status(201).json(newCard);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all cards
app.get('/cards', async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific card by title
app.get('/cards/:title', async (req, res) => {
  try {
    const card = await Card.findOne({ title: req.params.title });
    if (!card) {
      return res.status(404).json({ error: 'Card not found' });
    }
    res.json(card);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
