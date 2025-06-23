const mongoose = require('mongoose');

const connectDB = async () => {//async function is not used here because we are not using await
    try{
        await mongoose.connect(process.env.MONGOURL);
        console.log('MongoDB connected successfully');
    }
    catch(err){
        console.log(err);
    }
}

module.exports = connectDB;