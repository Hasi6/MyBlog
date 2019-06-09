// to hash user password before save in the database
const bcrypt = require('bcrypt');

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true, //check weather if user enterend username or not
        unique: true //check if the same username is already in the database
    },
    email: {
        type: String,
        required: true, //check weather if user enterend email or not
        unique: true, //check if the same email is already in the database
    },
    password: {
        type: String,
        required: true
    }
});

// Before save in database run the function in here
UserSchema.pre('save', function(next) {
    const user = this

    bcrypt.hash(user.password, 10, (err, encrypted) => {
        user.password = encrypted;
        // console.log(err);
        next();
    }); //10 is the number of the length of the encryption password if the number is high the process time also long
});

module.exports = mongoose.model('User', UserSchema);