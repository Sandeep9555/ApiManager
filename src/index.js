const express=require('express');
const dotenv=require('dotenv');
const app=express();
const cors=require("cors");
dotenv.config();
const mongoose=require('mongoose');

const userRouter = require('./routes/userRoutes');
const noteRouter = require('./routes/noteRoutes');
// const PORT=5000;
app.use(express.json());
app.use(cors());
app.use('/users',userRouter);

app.use('/note',noteRouter)
 app.get("/",(req,res)=>{
    res.send("Notes api created by sandeep");
 })
const PORT=process.env.PORT ||5000;
mongoose.connect(process.env.MONGO_URL)
.then(()=>{

app.listen(PORT,()=>{
    console.log('Server Started on the port'+ PORT);
});
})
.catch((err)=>{
    console.log(err);
})

