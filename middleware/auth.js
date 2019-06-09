const User = require('../database/models/User');

module.exports = (req, res, next) => {
    // fetch user form database
    User.findById(req.session.userId, (err, user) => {
            // if there is errors or user is not found to the given id redirect to the login page    
            if (err || !user) {
                return res.redirect('/auth/login');
            }
            next();
        })
        //verify user

    // if user is valid permit request

    //else redirect to login page
}