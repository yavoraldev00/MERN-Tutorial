const User = require("../models/userModel");

//  login
const loginUser = async (req, res) => {
    res.json({mssg: "Login user"})
}

//  register
const registerUser = async (req, res) => {
    res.json({mssg: "Register user"})
}


module.exports = { loginUser, registerUser }