let express = require('express')
let app = express();
let dotenv=require('dotenv').config()
let morgan=require('morgan')
let cors = require('cors')
let mongoose=require('mongoose')

app.use(morgan("tiny"));
app.use(cors())

mongoose.connect(process.env.connection_url)
.then(()=>{
    console.log("Databse connection is done...")
})
.catch((err)=>{
    console.log(err)
})

app.get('/',(req,res)=>{
    res.send("Hello bro")
})
app.post('/post',(req,res)=>{
    res.send("maligu")
})
app.listen(process.env.port, ()=> console.log(`APP listening on port ${process.env.port}`))