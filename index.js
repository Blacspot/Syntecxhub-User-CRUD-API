const express = require('express')
const mongoose = require('mongoose');
const userRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');
require('dotenv').config();

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);


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
    .catch((error) => {
        console.log('Database connection failed:', error.message);
        process.exit(1);
    })