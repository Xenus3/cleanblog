const User = require('../models/User.js')
const path = require('path')

module.exports =  (req,res)=>{
 User.init()
    .then(async ()=> {
        User.create(req.body);
        res.redirect('/');
    })
    .catch((error) => {
    console.log(error);
    
})
}
