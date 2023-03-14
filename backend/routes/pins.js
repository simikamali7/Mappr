// routing for pins.
// NODE.JS REST API

// need router 
const router = require("express").Router();
// get pin model
const Pin = require("../models/Pin");

// CREATE A NEW PIN
    // post method - for creating 
// new Pin = the pin schema in model
// req, body = everything will be in body.

// need to use async function for resolving (returning the newPin.)
    // awaits the creation of the new pin, then resolves it.

router.post("/", async (req,res) => {
    const newPin = new Pin(req.body);
    try{
        const savedPin = await newPin.save();
        res.status(200).json(savedPin);
    }catch(err){
        res.status(500).json(err)
    }
});

// get all pins
// using the pins model/schema - .find() looks for all.
router.get("/", async(req,res) => {
    try{
        const pins = await Pin.find();
        res.status(200).json(pins);
    }catch(err){
        res.status(500).json(err)
    }
})
module.exports = router