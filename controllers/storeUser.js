// Get database Connection to this file
const User = require('../database/models/User');

module.exports = (req, res) => {
    User.create(req.body, (err, user) => {
        if (err) {
            // display Errors
            const registrationErrors = Object.keys(err.errors).map(key => err.errors[key].message);
            // save errors in flash Function
            req.flash('registrationErrors', registrationErrors);

            //save the user enter details and keep them with errors
            req.flash('data', req.body);

            return res.redirect('/auth/register');
        }
        res.redirect('/');

    })
};