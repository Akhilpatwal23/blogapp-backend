import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes.js';
import blogRouter from './routes/blog-routes.js';
import cors from 'cors';

const app = express();         //
app.use(cors());
app.use(express.json());

app.use("/api/user",router);
app.use("/api/blog",blogRouter);
mongoose
.connect(process.env.mongoUrl)
.then(()=> app.listen(process.env.PORT || 5000))
.then(()=>console.log("Connected To DataBase and Listening To Local host 5000"))
.catch((err)=>console.log("error"));



             //GNobvmGBP0sl5ec0