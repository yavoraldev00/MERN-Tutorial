const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

// generate json token function
const createToken = (_id) => {
    return jwt.sign({_id},process.env.SECRET,{ expiresIn: "1d" })
}

//  login
const loginUser = async (req, res) => {
    const {email, password} = req.body;

    try{
        const user = await User.login(email, password)

        // creates a token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

//  register
const registerUser = async (req, res) => {
    const {email, password} = req.body;

    try{
        const user = await User.signup(email, password)

        // creates a token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    }catch(error){
        res.status(400).json({error: error.message})
    }
}


module.exports = { loginUser, registerUser }