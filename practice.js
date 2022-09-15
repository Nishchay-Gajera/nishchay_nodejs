// hell 
// setTimeout(()=>{
//     console.log("call to hr")
//     setTimeout(()=>{
//         console.log("Hr to Director")
//         setTimeout(()=>{
//             console.log("Information update")
//         },2000)
//     },1000)
// },2000)

//promise

// var promise1 = new Promise((resolve,reject)=>{
//     console.log("Yes promise called")
//     // const obj = {
//     //     user : 46
//     // }
//     // resolve(obj)
//     reject("Something went wrong")
// })

// .then((value)=>{
//     console.log(value)
// })
// .catch((err)=>{
//     console.log("error is ",err)
// })


//promise all

// var promise1 = new Promise((resolve,reject)=>{
//     let obj = {
//         sname: "Nishchay"
//     }
//     resolve(obj)
// })
// var promise2 = new Promise((resolve,reject)=>{
//     let obj1 = {
//         smarks: "90%"
//     }
//     reject("error found")
// })
// var promise3 = new Promise((resolve,reject)=>{
//     let obj2 = {
//         sposition: "pass"
//     }
//     resolve(obj2)
// })

// Promise.all([promise1,promise2,promise3])
// .then((results)=>{
//     console.log(results[2])
// })
// .catch((error)=>{
//     console.log(error)
// })

// var http = require("http");
// var server = http.createServer((request,response)=>{
//     response.setHeader("content-type","text/html")
//     response.write("Hello world")
//     response.end()
// })
// server.listen(2596,()=>{
//     console.log("Server started...")
// })