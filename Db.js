const mongoose = require('mongoose');


const connectDB = async () => {
    try {
      await mongoose.connect('mongodb://ec2-65-2-13-78.ap-south-1.compute.amazonaws.com/:27017', {
      });
      console.log('MongoDB connected successfully');
    } catch (err) {
      console.error('MongoDB connection error:', err);
      process.exit(1);
    }
  };
  
  module.exports = connectDB;