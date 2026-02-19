const express = require('express')
const mongoose = require('mongoose');
const app = express()

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    res.send('Hello from node!');
});

mongoose.connect('mongodb+srv://adminobwoge:J1Pz5PRfq2HJbblF@usercrudapi.oneucre.mongodb.net/?appName=userCRUDAPI')
  .then(() => {
    console.log('Connected!');
})
.catch(() => {
    console.log('Not Connected!');
})