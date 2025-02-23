const express =require('express');

const pool=require("./db")

const app =express();
const port =4055;
app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})



