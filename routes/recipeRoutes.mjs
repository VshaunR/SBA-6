import express from 'express';
import mongoose from 'mongoose';
import recipeCTL from '../controllers/recipeController.mjs'
const router = express.Router();

//get all recipes
// router.get('/',(req,res)=>{
//   try {
//     res.send('testing get route')
//   } catch (e) {
//     console.error(e);
//     res.status(500).json({msg:`Server Error`})
//   }
// })


//posting new recipe

router.post('/',recipeCTL.postRecipe)
export default router;