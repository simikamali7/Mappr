// main driver file for the backend

// calling express and mongo
const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRoute = require("./routes/users")
const pinRoute = require("./routes/pins")

// create the express app
const app = express();

dotenv.config();

// makes everything in JSON.
app.use(express.json());

// connecting to db
mongoose.connect(process.env.Mongo_url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    })
    .then(() => {
    console.log("Mongodb connected ")
}).catch((err) => console.log(err));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);

// change back to port 8800?
app.listen(8800, () => {
    console.log("Backend server is running")
})


