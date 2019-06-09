// to hash the user enter password and check in the database password and this is matched
const bcrypt = require('bcrypt');


// get user table
const User = require('../database/models/User');

module.exports = (req, res) => {
    const { email, password } = req.body;
    // try to find user by entered email and password
    User.findOne({ email: email }, (err, user) => {
        // if the user enter email in our database then we checked the password
        if (user) {
            bcrypt.compare(password, user.password, (err, match) => {
                if (match) {
                    // store user session
                    // now user id is save in the session
                    req.session.userId = user._id;
                    res.redirect('/')
                } else {
                    console.log(err);
                    res.redirect('/auth/login');
                }
            })
        } else {
            console.log(err);
            return res.redirect('/auth/login');
        }
    });

}