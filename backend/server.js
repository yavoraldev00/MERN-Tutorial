require("dotenv").config();

const express = require("express");

// express app
const app = express();

// middleware
app.use((req,res,next) => {
    console.log(req.path, req.method)
    next();
})

// routes
app.get("/", (req, res) => {
    res.json({mssg: "Here is a response object!"})
})

// listening for requests
app.listen(process.env.PORT, ()=> {
    console.log("Listening to port 3000...")
});