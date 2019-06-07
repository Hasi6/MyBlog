const path = require('path');

const expressEdge = require('express-edge');

const express = require('express');

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const Post = require('./database/models/Post');

const port = 5500;

const app = new express();

mongoose.connect('mongodb://localhost/MyBlog');

app.use(express.static('public'));

app.use(expressEdge);

app.set('views', `${__dirname}/views`);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

//Home Page
app.get('/', async(req, res) => {

    const posts = await Post.find({});
    console.log(posts);
    res.render('index', {
        posts: posts
    });
});

// create new Post page
app.get('/post/new', (req, res) => {
    res.render('create');
});

// About Page
app.get('/about', (req, res) => {
    res.render('about');
});

// SamplePost Page
app.get('/post/:id', async(req, res) => {

    const post = await Post.findById(req.params.id)

    res.render('post', {
        post
    });
});

// Contact Page
app.get('/contact', (req, res) => {
    res.render('contact');
});

// send data to database
app.post('/posts/store', (req, res) => {

    Post.create(req.body, (err, post) => {
        res.redirect('/');
    })


})

app.listen(port, () => {
    console.log(`App Start on ${port}`);
})