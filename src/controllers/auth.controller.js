const userModel = require("../models/user.model");
const jwt = require('jsonwebtoken');
const bcrypt=require('bcryptjs')

async function registerController(req, res) {
  const { username, password } = req.body;

  const checkUserExists = await userModel.findOne({
    username,
  });
  if (checkUserExists) {
    return res.status(409).json({
      message: "user already exists",
    });
  }

  const user = await userModel.create({
    username,
    password:await bcrypt.hash(password,10),
  });

  const token = jwt.sign({id:user._id},process.env.JWT_SECRET);
  res.cookie("token",token);

  res.status(201).json({
    message:"registered successfully",
    user
  })
}

async function loginController(req, res) {
  const { username, password } = req.body;  

  const user= await userModel.findOne({
   username
  })
  if(!user){
    return res.status(401).json({
        message:"user not found"
    })
  }
  const isValidPassword =await bcrypt.compare(password,user.password);

  if(!isValidPassword){
    return res.status(409).json({
        message:"password not match",
    })
  }
  const token = jwt.sign({id:user._id},process.env.JWT_SECRET);
  res.cookie("token",token);
  res.status(200).json({
    message:"user Login Successfully",
    user
  })
}

module.exports = { registerController,loginController };
