const express = require('express');
const app = new express();
app.use(express.static('public'));
const ejs = require('ejs');
app.set('view engine','ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
const fileUpload = require('express-fileupload');
app.use(fileUpload());
// Express session
const expressSession = require('express-session');
app.use(expressSession({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
    
  }));// secret string is used by the express-session package to sign and encrypt the session ID cookie 
// validation middleware
const validateMiddleware = require("./middleware/validateMiddleware");
// we want to use this validation middleware only for creating new posts
app.use('/posts/store',validateMiddleware);
// authentication middleware
const authMiddleware = require('./middleware/authMiddleware');
// redriect authenticated users middelware
const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware')
// code to hide links
global.loggedIn = null;

app.use("*", (req, res, next) => {
loggedIn = req.session.userId;
next()
});
// connect flash is used to store messages that are erased after being displayed to the user
const flash = require('connect-flash');
app.use(flash());


const newPostController = require('./controllers/newPost');
const homeController = require('./controllers/home');
const getPostController = require('./controllers/getPost');
const storePostController = require('./controllers/storePost');
const searchController = require('./controllers/search');
const getRegisterPage = require('./controllers/getRegisterPage');
const registerController = require('./controllers/register');
const loginController = require('./controllers/login');
const loginUserController = require('./controllers/loginUser');
const logoutController = require('./controllers/logout');


mongoose.connect('mongodb://localhost/my_database');


app.listen(4000, ()=>{
console.log('App listening on port 4000');
})

// refactoring get home page

app.get('/', homeController);

// Search bar function

app.post('/',searchController);

// search for the ID in the database and display it in new page

app.get('/post/:id',getPostController);
        
// refactoring get new post page
// we want to use the auth middleware while requesting the new post view

app.get('/posts/new', authMiddleware, newPostController);

// refactoring post new blog and save it to database
// we want to use the auth middleware while trying to save a post to the database

app.post('/posts/store', authMiddleware, storePostController);

// get registration page

app.get('/auth/register', redirectIfAuthenticatedMiddleware, getRegisterPage);

// register new user

app.post('/auth/register', redirectIfAuthenticatedMiddleware, registerController);

// get login page

app.get('/auth/login', redirectIfAuthenticatedMiddleware, loginController);

// login user

app.post('/users/login', redirectIfAuthenticatedMiddleware, loginUserController);

// logout user

app.get('/auth/logout', logoutController);

// to render a default 404 page

app.use((req, res) => res.render('notfound'));



          
            
   
    

    
    
   
        
                
    