import express from "express"
import dotenv from 'dotenv';
dotenv.config();
import data from "./data.js"

// app config
const app=express()

const port= process.env.PORT||8080

//listen

app.listen( port,()=> console.log(`listen on : ${port}`) )


// api routes
app.get("/",(req,res)=>res.status(200).send("server is ready"))

app.get('/api/products',(req,res)=>{
    res.send(data.products)
})