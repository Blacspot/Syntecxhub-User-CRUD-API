const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    Firstname: {
        type: String,
        required: [true, 'Please enter your first name']
    },
    Lastname: {
        type: String,
        required: [true, 'Please enter your last name']
    },
    Email: {
        type: String,
        required: [true, 'Please enter your email address'],
        unique: true
    },
    Password: {
        type: String,
        required: [true, 'Please enter your password']
    },
},
    {
        timestamps: true
    }
);

const User = mongoose.model('User', userSchema);
module.exports = User;