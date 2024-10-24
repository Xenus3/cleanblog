const User = require('../models/User.js')
const path = require('path')

module.exports = async (req,res)=>{
    // initialise the collection on the mangodb database
    User.init();
    
     await  User.create(req.body)
     .then((user) => {
        console.log('User ' + user.username + ' was created');
        res.redirect('/');
    })
    .catch((error) => {
        
        const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message);
        req.flash('validationErrors',validationErrors);
        req.flash('data',req.body);
        return res.redirect('/auth/register');

    })
}
