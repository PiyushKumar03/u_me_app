import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoute from './routes/userRoute.js';
import postRoute from './routes/postRoute.js';


// INITIALIZE APP
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());


app.get("/", (req,res) => {
    res.send("hello world");
})

// Route Entry Point
app.use('/user', userRoute);
app.use('/post', postRoute);



// MONGODB CONNECTION & PORT CONNECTION
const url = process.env.CONNECTION_URL
const port = process.env.PORT
mongoose.connect(url)
.then(() => app.listen(port, () => {
    console.log(`server is running at ${port}...`);
}))
.catch((err) => console.log(err));
