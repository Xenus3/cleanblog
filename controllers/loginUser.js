const bcrypt = require('bcrypt')
const User = require('../models/User')


module.exports = async (req, res) =>{
    const { username, password } = req.body;
    await User.findOne({username:username})
    .then((user) => {
        if (user){
            bcrypt.compare(password, user.password, (error, same) =>{
                if(same){ // if passwords match
                // store user session, will talk about it later
                    res.redirect('/');
                }
                else{
                    res.redirect('/auth/login');
                    console.log("Wrong Password");
                }
            })
        }
        else{
            res.redirect('/auth/login')
        }
    })
}
