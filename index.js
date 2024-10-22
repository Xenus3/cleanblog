const express = require('express')
const app = new express()
app.use(express.static('public'))
const ejs = require('ejs')
app.set('view engine','ejs')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
const fileUpload = require('express-fileupload')
app.use(fileUpload())
// creating a validation middleware
const validateMiddleware = require("./middleware/validateMiddleware");
// we want to use this validation middleware only for creating new posts
app.use('/posts/store',validateMiddleware)
const newPostController = require('./controllers/newPost')
const homeController = require('./controllers/home')
const getPostController = require('./controllers/getPost')
const storePostController = require('./controllers/storePost')
const searchController = require('./controllers/search')
const getRegisterPage = require('./controllers/getRegisterPage')
const registerController = require('./controllers/register')
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')


mongoose.connect('mongodb://localhost/my_database');


app.listen(4000, ()=>{
console.log('App listening on port 4000')
})

// refactoring get home page

app.get('/', homeController)

// Search bar function

app.post('/',searchController)

// search for the ID in the database and display it in new page

app.get('/post/:id',getPostController)
        
// refactoring get new post page

app.get('/posts/new',newPostController)

// refactoring post new blog and save it to database

app.post('/posts/store', storePostController)

// get registration page

app.get('/auth/register', getRegisterPage)

// register new user

app.post('/auth/register', registerController)

// get login page

app.get('/auth/login', loginController)

// login user

app.post('/users/login', loginUserController) 



          
            
   
    

    
    
   
        
                
    