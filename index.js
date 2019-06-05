const path = require('path');
const express = require('express');

const port = 5500;

const app = new express();

app.use(express.static('public'));

//Home Page
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/index.html'));
});

// About Page
app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/about.html'));
});

// SamplePost Page
app.get('/post', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/post.html'));
});

// Contact Page
app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/contact.html'));
});

app.listen(port, () => {
    console.log(`App Start on ${port}`);
})