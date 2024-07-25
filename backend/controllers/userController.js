const User = require("../models/userModel");

//  login
const loginUser = async (req, res) => {
    res.json({mssg: "Login user"})
}

//  register
const registerUser = async (req, res) => {
    const {email, password} = req.body;

    try{
        const user = await User.signup(email, password)

        res.status(200).json({email, user})
    }catch(error){
        res.status(400).json({error: error.message})
    }
}


module.exports = { loginUser, registerUser }