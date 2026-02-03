const express=require('express')
let app=express()
app.get('/health',(req,res)=>{
    res.send("Healthy")
})
app.listen(3000,()=>{
    console.log("Server is running")
})