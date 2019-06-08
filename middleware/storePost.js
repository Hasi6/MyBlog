module.exports = (req, res, next) => {
    if (!req.files || !req.body.username || !req.body.title || !req.body.subtitle || !req.body.content) {
        return res.redirect("/post/new");
    }
    next();
}