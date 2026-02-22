const express = require('express')
const mongoose = require('mongoose');
const userRoutes = require('./routes/user.routes');
const User = require('./models/user.model');
require('dotenv').config();

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/crud', userRoutes);


app.get('/', (req, res) => {
    res.send('Hello from node!');
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