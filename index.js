const path = require('path');

const expressEdge = require('express-edge');

const express = require('express');

const port = 5500;

const app = new express();

app.use(express.static('public'));

app.use(expressEdge);

app.set('views', `${__dirname}/views`);

//Home Page
app.get('/', (req, res) => {
    res.render('index');
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

app.listen(port, () => {
    console.log(`App Start on ${port}`);
})