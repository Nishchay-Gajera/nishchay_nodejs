var promise1 = new Promise((resolve,reject)=>{
    console.log("Yes promise called")
    const obj = {
        user : 46
    }
    resolve(obj)
    reject("Something went wrong")
})

.then((value)=>{
    console.log(value)
})
.catch((err)=>{
    console.log("error is ",err)
})