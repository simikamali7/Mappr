// need mongoose
const mongoose = require("mongoose")


// create Pins Schema for DB.
// need username, title, description, rating, and coordinates of pin.
const PinSchema = new mongoose.Schema(
    {   id:{
            type:Number
    },
        username:{
            type:String,
            require:true,
        },
        title: {
            type:String,
            require:true,
            minchar:3
        },
        description: {
            type:String,
            require:true,
        },
        rating: {
            type: Number,
            require:true,
            minchar: 5,
            maxchar: 5,
        },
        latitude: {
            type: Number,
            require:true,
        },
        longitude: {
            type: Number,
            require:true
        }
    },
// time stamps time and date user is updated or created.
{timestamps:true}

);
// to export userSchema.
module.exports = mongoose.model("Pin", PinSchema);