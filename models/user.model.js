const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({

    firstName: {
        type: String,
        required: [true, 'Please enter your first name']
    },
    lastName: {
        type: String,
        required: [true, 'Please enter your last name']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email address'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please enter your password']
    },
},
    {
        timestamps: true
    }
);

userSchema.pre('save', async function() {
    if (!this.isModified('Password')) return;
    this.Password = await bcrypt.hash(this.Password, 10);
});

const User = mongoose.model('User', userSchema);
module.exports = User;