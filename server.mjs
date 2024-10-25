import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import recipeRouter from './routes/recipeRoutes.mjs';
import userRouter from './routes/userRoutes.mjs';
import connectDB from './db/conn.mjs';
import users from './data/users.mjs';
import recipes from './data/recipes.mjs';
import Recipe from './models/recipeSchema.mjs';
import User from './models/userSchema.mjs';
//set up server/dotenv
const app = express();
dotenv.config();
connectDB();
const PORT = process.env.PORT || 3000;




//middleware, bodyparser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true}));


//routers
app.use('/recipe',recipeRouter);
app.use('/user',userRouter);

//seed route
// app.get('/seed',async(req,res)=>{

//   try {
//     await User.create(users);
//     await Recipe.create(recipes);
//     res.send('Seeding the database')
//   } catch (e) {
//     console.error(e);
//     res.status(500).json({msg:`Server error`})
//   }


// });
//seed recipe route
// app.get('/seedRecipes',async(req,res)=>{

//   try {
  
//     await Recipe.create(recipes);
//     res.send('Seeding the database')
//   } catch (e) {
//     console.error(e);
//     res.status(500).json({msg:`Server error`})
//   }


// });


//app.listen
app.listen(PORT,()=>{
  console.log(`Listening to Port :${PORT}`)
});

