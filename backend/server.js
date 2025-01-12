import express from "express";
import cors from 'cors'
import dotenv from 'dotenv'
import routers from './routes/routes.js'
import dbCon from "./utlis/db.js";



dotenv.config()
const PORT=process.env.PORT||8000
const app=express()
dbCon()
app.use(cors())
app.use(express.json())
app.use('/api',routers)


app.get('/',(req,res)=>{
    res.send("Why you people are not running on the Ground!");
})

app.listen(PORT,()=>{
    console.log(`server is running on. http://localhost:${PORT}`)
})