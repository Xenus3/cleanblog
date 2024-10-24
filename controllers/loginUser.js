const bcrypt = require('bcrypt')
const User = require('../models/User')


module.exports = async (req, res) =>{
    const { username, password } = req.body;
    await User.findOne({username:username})
    .then((user) => {
        if (user){
            bcrypt.compare(password, user.password, (error, same) =>{
                if(same){ // if passwords match
                // store user session
                    req.session.userId = user._id;
                    res.redirect('/');
                }
                else{
                    res.redirect('/auth/login');
                    console.log(error);
                }
            })
        }
        else{
            res.redirect('/auth/login')
        }
    })
}
