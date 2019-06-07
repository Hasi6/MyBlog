const mongoose = require("mongoose");

const Post = require("./database/models/Post");

mongoose.connect('mongodb://localhost/MyBlog-test');

// CREATE POST 
// Post.create({
//     title: 'My First blog Post',
//     description: 'Blog Post description',
//     content: 'Lorem ipsum content'
// }, (error, post) => {
//     console.log(error, post);
// });

// FIND POST IN DATA BASE
// Post.find({
//     title: 'My First blog Post'
// }, (err, post) => {
//     console.log(err, post);
// });

// Post.find({}, (err, post) => {
//     console.log(err, post);
// })

// FIND POSTS USING POSTID
// Post.findById("5cfa079e5ef1ca9c8a1", (err, post) => {
//     console.log(err, post);
// });

// FIND BY ID AND (UPDATE) POSTS 
// Post.findByIdAndUpdate("5cfa0700dd41d932a041f61a", {
//     title: 'Hasi\'s First Blog Post Title',
//     description: 'Hasi is a Very Good Full Stack Web Developer'
// }, (err, post) => {
//     console.log(err, post);
// });

// FIND BY ID AND DELETE
Post.findByIdAndDelete("5cfa0700dd41d932a041f61a", (err, post) => {
    console.log(err, post);
})