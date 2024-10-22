import express from 'express';
import mongoose from 'mongoose';
const router = express.Router();


router.get('/',(req,res)=>{
  try {
    res.send('testing get route')
  } catch (e) {
    console.error(e);
    res.status(500).json({msg:`Server Error`})
  }
})



export default router;