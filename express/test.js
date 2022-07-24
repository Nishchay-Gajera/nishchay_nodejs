const express = require("express")
const app = express()
const port = 3000;

app.get("/",(req,res)=>{
    res.send("Hello Bro :)");
    console.log("Request...")
})
app.listen(port,()=>{
    console.log("Listening...")
})