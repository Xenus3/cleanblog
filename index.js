const express = require('express')
const path = require('path')
const app = new express()
app.use(express.static('public'))
const ejs = require('ejs')
app.set('view engine','ejs')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
const BlogPost = require('./models/BlogPost.js')


mongoose.connect('mongodb://localhost/my_database');


app.listen(4000, ()=>{
console.log('App listening on port 4000')
})

app.get('/',async (req,res)=>{
    const blogposts = await BlogPost.find({});
    console.log(blogposts);
    res.render('index', {
        blogposts: blogposts
        });
    })

app.get('/about',(req,res)=>{
    //res.sendFile(path.resolve(__dirname,'pages/about.html'))
    res.render('about');
    })

app.get('/contact',(req,res)=>{
    //res.sendFile(path.resolve(__dirname,'pages/contact.html'))
    res.render('contact');
    })
        
app.get('/post',(req,res)=>{
    //res.sendFile(path.resolve(__dirname,'pages/post.html'))
    res.render('post')
    })

app.get('/posts/new',(req,res)=>{
        res.render('create')
        })

/*app.post('/posts/store',(req,res)=>{
        // model creates a new doc with browser data
        BlogPost.create(req.body)
        .then((createdBlog) =>{
            if(createdBlog) {
                res.redirect('/')
            }
            else {
                console.log("Blog not created")
            }
        })
        .catch(error => {
            console.error('Error creating Blog:', error);
          })
    })*/

          app.post('/posts/store', async (req,res)=>{
            await BlogPost.create(req.body);
            res.redirect('/');
            })
            
    
         
    