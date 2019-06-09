// Get database Connection to this file
const Post = require('../database/models/Post');

module.exports = async(req, res) => {

    const posts = await Post.find({}).sort({ createdAt: 'desc' });
    console.log(req.session);
    res.render('index', {
        posts: posts
    });
}