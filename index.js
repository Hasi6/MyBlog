const expressEdge = require('express-edge');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const port = 5500;

// store create functions in variables
const createPostController = require("./controllers/createPost");
const homePageController = require("./controllers/homePage");
const storePostController = require("./controllers/storePost");
const getPostController = require("./controllers/getPost");
const aboutPageController = require("./controllers/aboutPage");
const contactPageController = require("./controllers/contactPage");
const registerPageController = require("./controllers/createUser");
const validateMiddlewareController = require("./middleware/storePost");
const storeUserController = require("./controllers/storeUser");

const app = new express();

// connet with database
mongoose.connect('mongodb://localhost/MyBlog');

app.use(fileUpload());
app.use(express.static('public'));
app.use(expressEdge);
app.set('views', `${__dirname}/views`);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


// Check if the create post page input fields are filled or not
const validateCreatePostMiddleware = validateMiddlewareController;

// only check in /posts/store page
app.use('/posts/store', validateCreatePostMiddleware);



//Home Page
app.get('/', homePageController);

//New User Registration
app.get('/auth/register', registerPageController);

// create new Post page
app.get('/post/new', createPostController);

// About Page
app.get('/about', aboutPageController);

// SamplePost Page
app.get('/post/:id', getPostController);

// Contact Page
app.get('/contact', contactPageController);

// send create posts data to database
app.post('/posts/store', storePostController);

// send user details to the database
app.post('/auth/register', storeUserController)

// localhost port
app.listen(port, () => {
    console.log(`App Start on ${port}`);
})