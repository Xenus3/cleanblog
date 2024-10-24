const User = require('../models/User');

module.exports = async (req, res, next) => {
   await User.findById(req.session.userId)
   .then((user) =>{
        if(!user )
            return res.redirect('/');

        next();
    })
    .catch((error) => {
        console.log(error);
    }
    )
}