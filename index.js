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
app.get('/', (req, res) => {
    res.render('index');
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
app.get('/post', (req, res) => {
    res.render('post');
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