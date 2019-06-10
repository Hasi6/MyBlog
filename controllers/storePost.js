// Get database Connection to this file
const Post = require('../database/models/Post');

// path
const path = require('path');


module.exports = (req, res) => {

    const { image } = req.files;

    image.mv(path.resolve(__dirname, '..', 'public/posts', image.name), (err) => {
        Post.create({
            ...req.body,
            image: `/posts/${image.name}`,
            author: req.session.userId
        }, (err, post) => {
            res.redirect('/');
        })
    })




}