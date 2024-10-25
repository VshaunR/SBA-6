import mongoose from "mongoose";
import User from '../models/userSchema.mjs'



async function postUser(req,res){

  try {
    let user = await new User(req.body);
    await  user.save();
    res.json(user)
  } catch (e) {
    console.error(e);
    res.status(500).json({msg:`Server Error`})
  }
};


async function getAllUser(req,res){

  try {
    let allUsers = await User.find({})
    res.json(allUsers)
  } catch (e) {
    console.error(e);
    res.status(500).json({msg:`Server Error`})
  }
};


async function editUser(req,res){

  try {
    let updateUser = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json(updateUser)
  } catch (e) {
    console.error(e);
    res.status(500).json({msg:`Server Error`})
  }
};


async function deleteUser(req,res){

  try {
    let deleteUser = await User.findByIdAndDelete(req.params.id);
    res.json(deleteUser)
  } catch (e) {
    console.error(e);
    res.status(500).json({msg:`Server Error`})
  }
};

export default {postUser,getAllUser,editUser,deleteUser}