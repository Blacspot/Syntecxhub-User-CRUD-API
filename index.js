const express = require('express')
const mongoose = require('mongoose');
require('dotenv').config();

const app = express()
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello from node!');
});

app.post('/adduser', (req, res) => {
    console.log(req.body);
    res.send(req.body);
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