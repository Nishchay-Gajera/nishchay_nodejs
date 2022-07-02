let http = require("http")
let url = require("url")
let server = http.createServer((req,res)=>{
    res.setHeader("Content-Type","text/html")
    const q = url.parse(req.url,true).query
    if(q.uname == "admin" && q.upass == "Admin"){
        res.write("<h1>Login success</h1>")
    }
    else{
        res.write("<h1>Wrong detail</h1>")
    }
    res.end()
})
server.listen(8080)

