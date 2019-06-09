const User = require('../database/models/User');

module.exports = (req, res, next) => {
    // fetch user form database
    if (req.session.userId) {
        return res.redirect('/');
    }

    next();
    //verify user

    // if user is valid permit request

    //else redirect to login page
}