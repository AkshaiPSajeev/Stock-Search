const express=require('express');
const cors=require('cors');
const app=express();

app.use(cors());
app.listen(8000,(req,res)=>{
    console.log('listening to port 8000');
})

