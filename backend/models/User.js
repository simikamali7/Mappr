// DB - CREATING A USER SCHEMA IN DB

const mongoose = require("mongoose")

// create user schema - in DB. 
const UserSchema = new mongoose.Schema({
    username: {
        type:String,
        require:true,
        minchar:3,
        maxchar:20,
        unique:true,
    },
    email: {
        type:String,
        require:true,
        maxchar:50,
        unique:true, 
    },
    password: {
        type:String,
        require:true,
        minchar:6,
    },
},
// time stamps time and date user is updated or created.
{timestamps:true}

);

// connecting User schema to the User module I made, which is being exported like any other module.
module.exports = mongoose.model("User", UserSchema);