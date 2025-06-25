const user = require('../models/userModel');
const bcrypt = require('bcryptjs');

exports.getRoute = async (req,res) => {
    const userData = await user.find();
    res.status(201).json({data:userData})
}

exports.getRouteById = async (req,res)=>{
    const userData = await user.findById(req.params.id);
    res.status(201).json({userData})
}

/*exports.postRoute = async (req,res) => {
    const { username, password } = req.body;
    const exist = await user.findOne({username,password});
    if(exist) return res.status(401).json({
        message:'User already exists'
    })
    const hashedPassword = await bcrypt.hash(password,10)
    const newUser =new user({username,password:hashedPassword})
    await newUser.save();
    res.status(201).json({user:newUser})
   /* const newUser = new user({username,password})
    await newUser.save();//saves data in mongodb
    res.status(201).json({user:newUser})
}*/
exports.signupRoute = async (req,res) => {
    const {username,password} = req.body;
    const exist = await user.findOne({username,password});
    if(exist) return res.status(401).json({
        message:'User already exists'
    })
    const hashedPassword = await bcrypt.hash(password,10)
    const newUser =new user({username,password})
    await newUser.save();
    res.status(201).json({user:newUser})
   /* const newUser = new user({username,password})
    await newUser.save();//saves data in mongodb
    res.status(201).json({user:newUser})*/
}

exports.loginRoute = async (req,res) => {
    const { username , password } = req.body;
    const userdata = await user.findOne({username});
    if(!userdata) return res.status(401).json({
        message:'User not found'
    })
    const valid = await bcrypt.compare(password,userdata.password);
    if(!valid) res.status(201).json({message:"Login successful"})
        res.status(401).json({message:"Password Invalid"})
}
exports.putRoute = async (req,res) => {
    const {username,password} = req.body;
    const update = await user.findByIdAndUpdate(req.params.id,req.body)
    if(!update) return res.status(401).json({message:"User not exists"})
        res.status(201).json({update}) 
}
exports.deleteRoute = async (req,res) => {
    const {username,password} = req.body;
    const deleteuser = await user.findByIdAndDelete(req.params.id,req.body)
    if(!deleteuser) return res.status(401).json({message:"User not exists"})
        res.status(201).json({deleteuser}) 
    res.send('Delete route is working');
}
