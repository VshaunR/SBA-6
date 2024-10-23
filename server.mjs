import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import recipeRouter from './routes/recipeRoutes.mjs';
import connectDB from './db/conn.mjs';
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

//app.listen
app.listen(PORT,()=>{
  console.log(`Listening to Port :${PORT}`)
});

