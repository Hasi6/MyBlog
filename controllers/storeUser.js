// Get database Connection to this file
const User = require('../database/models/User');

module.exports = (req, res) => {
    User.create(req.body, (err, user) => {
        res.redirect('/');
    })
};