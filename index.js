const expressEdge = require('express-edge');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const expressSession = require('express-session');
const connectMongo = require('connect-mongo');
const connectFlash = require('connect-flash');
const port = 5500;

// store create functions in variables
const createPostController = require("./controllers/createPost");
const homePageController = require("./controllers/homePage");
const storePostController = require("./controllers/storePost");
const getPostController = require("./controllers/getPost");
const aboutPageController = require("./controllers/aboutPage");
const contactPageController = require("./controllers/contactPage");
const registerPageController = require("./controllers/createUser");
const storeUserController = require("./controllers/storeUser");
const loginPageController = require("./controllers/login");
const loginUserController = require("./controllers/loginUser");

// middlewares
const validateMiddlewareController = require("./middleware/storePost");
const authMiddleware = require("./middleware/auth");
const redirectIfAuthenticatedMiddleware = require("./middleware/redirectIfAuthenticated");

const app = new express();

// connet with database
mongoose.connect('mongodb://localhost/MyBlog');

// flash
app.use(connectFlash());

const mongoStore = connectMongo(expressSession);

// register sessions to keep track on user email and password whitch user entered
app.use(expressSession({
    secret: 'secret',
    store: new mongoStore({
        mongooseConnection: mongoose.connection
    })
}));



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






//Home Page
app.get('/', homePageController);



// create new Post page before check the auth middleware if the user is logged in or not
app.get('/post/new', authMiddleware, createPostController);

// About Page
app.get('/about', aboutPageController);

// SamplePost Page
app.get('/post/:id', getPostController);

// Contact Page
app.get('/contact', contactPageController);

// send create posts data to database and before send run the middleware function is user logged in after that to check all fields are filled
app.post('/posts/store', authMiddleware, validateCreatePostMiddleware, storePostController);

// send user details to the database
app.post('/auth/register', redirectIfAuthenticatedMiddleware, storeUserController); //check if user logged in already

//New User Registration
app.get('/auth/register', redirectIfAuthenticatedMiddleware, registerPageController); //check if user logged in already

//User login
app.get('/auth/login', redirectIfAuthenticatedMiddleware, loginPageController); //check if user logged in already

// post login data
app.use('/users/login', redirectIfAuthenticatedMiddleware, loginUserController); //check if user logged in already

// localhost port
app.listen(port, () => {
    console.log(`App Start on ${port}`);
})