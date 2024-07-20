require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./Routes/workouts')

// express app
const app = express()

// middleware
app.use(express.json())

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
app.use('/api/workouts', workoutRoutes)