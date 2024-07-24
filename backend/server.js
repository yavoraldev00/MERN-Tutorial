require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./Routes/workouts')
const userRoutes = require("./Routes/user")

const cors = require("cors") // cross server request enabler

// express app
const app = express()

// middleware
app.use(express.json())

// using cors
const corsOptions = {
  origin: 'http://localhost:4000'
}

// app.use(cors(corsOptions));
app.use(cors());

// connect to db
mongoose.connect(process.env.MONG_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('Connected to database! Listening on port', process.env.PORT)
    })
  })
  .catch(error => {
    console.log(error)
  })

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/workouts', workoutRoutes);
app.use('/api/user', userRoutes);