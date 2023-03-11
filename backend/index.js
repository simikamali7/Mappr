// call express
const express = require("express")
// call mongoose
const mongoose = require("mongoose")

// crate express appplication
const app = express();

// port number
app.listen(8800, () => {
    console.log("Backend server is running")
})