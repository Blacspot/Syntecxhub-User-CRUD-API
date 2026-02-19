const express = require('express')
const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/user.model');

const app = express()
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello from node!');
});

app.get('/getusers', async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error: error.message });
    }
});

app.post('/adduser', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({ message: 'User added successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Error adding user', error: error.message });
    }
});

app.get('/getusers/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const users = await User.findById(id);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user by id', error: error.message });
    }
});

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected!');
    app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
})
.catch(() => {
    console.log('Not Connected!');
})