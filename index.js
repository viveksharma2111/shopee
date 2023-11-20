const mongoose = require('mongoose')
const fs = require('fs').promises
const express = require('express')
const app = express();
const User = require('./modules/User')


app.use(express.static(__dirname + '/'))
mongoose.connect('mongodb://127.0.0.1:27017/e-commerce')
app.use(express.urlencoded({extended:true}))

app.post("/", async (req,res)=>{
    try {
        let UserData = new User(req.body) 
        await UserData.save()
        let a = await fs.readFile("index.html")
        res.send(a.toString())
        
    } catch (error) {
        console.error("this is frist error",error.message)
        res.status(500).send("this is frist error ")
        
    }
})
app.get("/", async (req,res)=>{
    try {
        let UserData = new User(req.body) 
        await UserData.save()
        let a = await fs.readFile("singup.html")
        res.send(a.toString())
        
    } catch (error) {
        console.error("this is frist error",error.message)
        res.status(500).send("this is frist error ")
        
    }
})

app.listen(3001)