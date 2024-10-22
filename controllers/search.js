const BlogPost = require('../models/BlogPost.js')

module.exports = async (req,res)=>{
    // we retrieve the search input
    const search = req.body.search;
    //we find only blogs wich have the search input in their title
    const blogposts = await BlogPost.find({ title: {$regex: search, $options:'i'} }).exec();
    res.render('index', {
        blogposts: blogposts
        });
    }