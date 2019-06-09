module.exports = (req, res) => {
    // distroy the session then the user details will be removed
    req.session.destroy(() => {
        res.redirect('/');
    });
}