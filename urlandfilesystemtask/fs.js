let http = require("http")
let fs = require("fs")
let result,result1;
let server = http.createServer((request,response)=>{
    response.setHeader("content-type","text/html")
    response.write(result1)
    console.log("request...")
    response.end()
})
server.listen(8080,()=>{
    console.log("Server created...")
})
fs.writeFileSync("demo.txt","<h1>Hi this is nishchay gajera</h1>");
fs.appendFileSync("demo.txt","<h1>How are you</h1>")
result = fs.readFileSync("demo.txt")
fs.writeFileSync("demo1.txt",result)
result1 = fs.readFileSync("demo1.txt")
fs.unlinkSync("demo.txt")