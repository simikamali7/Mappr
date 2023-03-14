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

app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);

// change back to port 8800?
app.listen(8800, () => {
    console.log("Backend server is running")
})


