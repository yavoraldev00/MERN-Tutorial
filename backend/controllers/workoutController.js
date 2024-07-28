const mongoose = require("mongoose");
const Workout = require("../models/workoutModel")


// GET ALL workouts
const getWorkouts = async (req, res) => {
    const user_id = req.headers.authorization;
    const workouts = await Workout.find({user_id}).sort({createdAt: -1})

    // newWorkouts = workouts.forEach(e=>{console.log(e["user_id"] == user_id)})
    // debugger;
    res.json(workouts);
}

// GET a SINGLE workout
const getWorkout = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.isValidObjectId(id)){
        return res.status(404).json({error: "No such workout"})
    }

    const workout = await Workout.findById(id)

    if(!workout){
        res.status(404).json({error: "No such workout"})
    }

    res.json(workout)
}


// POST a workout
const createWorkout = async (req, res) => {
    const { title, reps, sets } = req.body;
    debugger;
    const user_id = req.headers.authorization;

    let emptyFields = []

    if(!title){
        emptyFields.push("title")
    }
    if(!reps){
        emptyFields.push("reps")
    }
    if(!sets){
        emptyFields.push("sets")
    }
    if(emptyFields.length > 0){
        res.status(400).json({mssg: "The highlited fileds are required, please fill them in", emptyFields})

        return
    }

    try {
      const workout = await Workout.create({sets,reps,title, user_id})
      res.status(200).json(workout)
    } catch (error) {
      res.status(400).json({mssg: error.message})
    }
}

// DELETE a workout
const deleteWorkout = async (req,res) => {
    const { id } = req.params;

    if(!mongoose.isValidObjectId(id)){
        return res.status(404).json({error: "No such workout"})
    }

    const workout = await Workout.findByIdAndDelete(id)

    if(!workout){
        res.status(404).json({error: "No such workout"})
    }

    res.json(workout)
}

// UPDATE a workout
const updateWorkout = async (req,res) => {
    const { id } = req.params;

    if(!mongoose.isValidObjectId(id)){
        return res.status(404).json({error: "No such workout"})
    }

    const workout = await Workout.findByIdAndUpdate(id,{
        ...req.body
    })

    if(!workout){
        res.status(404).json({error: "No such workout"})
    }

    res.json(workout)
}

module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}