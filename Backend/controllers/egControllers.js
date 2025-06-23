const user = require('../models/userModel');

exports.getRoute = async (req,res) => {
    const userData = await user.find();
    res.status(201).json({data:userData})
}
exports.postRoute = async (req,res) => {
    const {username,password} = req.body;
    const exist = await user.findOne({username,password});
    if(exist) return res.status(401).json({
        message:'User already exists'
    })
    const newUser = new user({username,password})
    await newUser.save();//saves data in mongodb
    res.status(201).json({user:newUser})
}

exports.putRoute = async (req,res) => {
    const {username,password} = req.body;
    const update = await user.findByIdAndUpdate(req.params.id,req.body)
    if(!update) return res.status(401).json({message:"User not exists"})
        res.status(201).json({update}) 
}
exports.deleteRoute = async (req,res) => {
    const deleteUser = await user.findByIdAndDelete(req.params.id);
    if(!deleteUser) return res.status(401).json({message:"User not exists"})
    res.status(201).json({message:"User deleted successfully"})
}