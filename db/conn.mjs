import mongoose from "mongoose";
import dotenv from 'dotenv';


dotenv.config();

const connectString = process.env.mongoURI;


const connectDB =async()=>{
  try {
    await mongoose.connect(connectString);
    console.log(`Connected to mongoDB via mongoose`)


  } catch (e) {
    console.error(e);
    process.exit(1)
  }
}

export default connectDB;