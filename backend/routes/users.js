// NODE REST API - FOR USERS
// import router, User model/schema, bcrypt for pass
// importing User module made in User.js
const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');

// register user
    // app can use http method, post, to send the data for new user to the api, which the api then creates the new user record on the server and respond with status code.
router.post("/register", async (req,res)=> {
    try{
        // generate new pass
            // create salt
            // hash password - salt is used to hash the password 
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password,salt)

        // then create new user based on DB model
            // pass not in request body - use new pass (hashedpassword)
            // use request (req) not response as we don't need response sent back from server but want to send a request to server.
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });

        // save user and send s uccess response -
        const user = await newUser.save();
        res.status(200).json(user._id);
    }catch(err){
        res.status(500).json(err);
    }
});

// login user - post method
router.post("/login", async(req,res) =>{
    try{
        // find user - using User schema
        const user = await User.findOne({username:req.body.username})
        
        // if username is wrong.
        !user && res.status(400).json("Wrong username or password")

        // validate password
            // compare the password entered; req.body.password and the one stored in db user.password.
        const validPassword = await bcrypt.compare(req.body.password, user.password);

        // if password not valid
        !validPassword && res.status(400).json("Wrong username or password")
        
        // send successful if credentials match - send response containing the id and username of the user. 
        res.status(200).json({_id: user._id, username: user.username})
    }catch(err){
        res.status(500).json(err)
    }
} )

// need to export.
module.exports = router;