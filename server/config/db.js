const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);

    // Handle disconnections
    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB connection lost');
    });

    mongoose.connection.on('error', (err) => {
      console.error('MongoDB error:', err);
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};


module.exports = connectDB;