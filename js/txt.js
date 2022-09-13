//30-5-22
// var a = 10;
// var b = 20;
// console.log(10+10)
// console.log(20+30)
// console.log(30*'40')
// console.log(10 +"10")
// console.log(a<b)
// console.log(b<a)
// console.log(true+true)
// console.log(true/false)
// console.log(a+'12')

// 31-5-22
// var a = 10;
// {
//     var a = 20;
//     console.log(a);
// }
// console.log(a);

// let a = 10;
// {
//     let a = 20;
//     console.log(a);
// }
// console.log(a)

// const a = 40;
// {
//     const a = 50;
//     console.log(a);
// }
// console.log(a);

// var a = 40;
// {
//     let a = 50;
//     console.log(a);
// }
// console.log(a);

// var a = 40;
// {
//     let a = 50
//     {
//         const a = 60;
//         console.log(a); 
//     }
//     console.log(a); 
// }
// console.log(a); 

// 1-6-22
// String

//normal string
// let string = 'Hi this is nishchay gajera';
// console.log(string)

// let string1 = "Node"
// let string2 = "JS"
// let string = string1 + string2 + "Is the Best Language"; Complicated
// console.log(string);

//will cause error in multiple line of string
// let string = "Lorem ipsum dolor sit amet 
// consectetur adipisicing elit. Aperiam facere, laborum obcaecati velit fugit recusandae 
// asperiores veniam autem ipsum dolor voluptas. Vitae dolor fugiat dolorem at, excepturi est. Repudiandae, earum?"
// console.log(string)


//backtick
// let string = `Hi this is nishchay gajera And this text is printed using backtick`
// console.log(string)

// let string1 = "Node"
// let string2 = "JS"
// let string = `${string1} ${string2}`; Not So Complicated
// console.log(string);

//will run perfectly in multi line of string
// let string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facere, laborum obcaecati velit fugit recusandae 
// asperiores veniam autem ipsum dolor voluptas. Vitae dolor fugiat dolorem at, excepturi est. Repudiandae, earum?`
// console.log(string)

//Type of Function
// console.log(typeof function () { });          //function
// console.log(typeof true);                     //boolean
// console.log(typeof {});                       //object
// console.log(typeof []);                       //object
// console.log(typeof 100);                      //number
// console.log(typeof undefined);                //undefined
// console.log(typeof null);                     //object
// console.log(typeof Symbol("Hello"));          //symbol
// console.log(typeof 100n);                     //bigint
// console.log(typeof "Hello");                  //string

// 2-6-22

// 0 = false
// 1 = true

// console.log(1 ^ 1); //0
// console.log(0 ^ 0); //0
// console.log(1 ^ 0); //1
// console.log(0 ^ 1); //1

//Double Equal sign checks value
//Triple Equal sign checks value and datatype

// null = Completely empty TYPE= object
// undefined = Have something but don't know what TYPE = undefined
// NaN= It comes when there is no legal number TYPE= number

// console.log(null == null); //true
// console.log(null === null); //true

// console.log(null == undefined); //true
// console.log(null === undefined); //false

// console.log(null == NaN); //false
// console.log(null === NaN); //false

// console.log(undefined == undefined); //true
// console.log(undefined === undefined); //true

// console.log(undefined == NaN); //false
// console.log(undefined === NaN);//false

// console.log(NaN == NaN); //False
// console.log(NaN === NaN); //False

// 3-6-22

// The Array object, as with arrays in other programming languages, enables storing 
// a collection of multiple items under a single variable name, and has members 
// for performing common array operations.

// Array is a object it is not a real array

// console.log(arr["0"]);
// console.log(arr[3.1]);
// var arr[3.5] = 45;
// console.log(arr[3.5]);
// arr["A"] = 110;

//declareration of array
// let arr = [5,8,9,4];
//console.log(arr)

// let arr = [5,6,8,9,'sfsj']
// arr[4.5] = 88;
// console.log(arr)

// Length = in js length is a property not a function

// let arr = [5,6,8,9,7]
// console.log(arr.length); = legth is 5

// let arr = [10,20,30,40,50]
// arr.length = 100;
// console.log(arr.length)

// let arr = [10,20,30,40,50]
// arr.length = 100;
// arr[100] = 15;
// console.log(arr)

// delete it helps us to delete an element data it doesn't delete element

// let arr = [9,5,6,4,9]
// delete arr[4];
// console.log(arr)
// console.log(arr.length) = 5

// let arr = [9,5,6,4,9]
// delete arr[4];
// console.log(arr[4])

// empty item and undefined difference

// when we print a whole array then it shows empty item 
// but when we print a single element then it shows undefined
// you can use undefined in replacement of delete

// let i;
// let arr = [10,20,30,40,50,null]
// arr.length =100;
// delete arr[1];
// delete arr[3];
// delete arr[4];
// console.log(arr[1]===undefined)

//6-6-22

//push()
// let arr=[10,20,33,40,50,60,70,80,90]
// arr.push(20)
// console.log(arr)

// pop()
// let arr = [10,20,30,40,50,60,70,80,90,100]
// arr.pop();
// console.log(arr)
// console.log(arr.length)

//unshift()
// let arr = [10,20,30,40,50,60,70,80,90,100]
// arr.unshift(50);
// console.log(arr)

//Shift()
// let arr = [10,20,30,40,50,60,70,80,90,100]
// arr.shift();
// console.log(arr)

//splice()
// it is used to add/remove the element at any index
let arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// arr1.splice(5, 3);
// console.log(arr1);
// arr1.splice(6, 1);
// console.log(arr1);
// arr1.splice(0, 1);
// console.log(arr1);
// arr1.splice(1, 1);
// console.log(arr1);
// arr1.splice(2, 0, 11, 12, 13);
// console.log(arr1);
// arr1.splice(1, 1, 11);
// console.log(arr1);
// arr1.splice(0, 0, 11);
// console.log(arr1);
// arr1.splice(9, 0, 110);
// console.log(arr1);

// 7-6-22

//Slice();
// The slice() method returns a shallow copy of a portion of an array into 
// a new array object selected from start to end (end not included) 
// where start and end represent the index of items in that array.
// The original array will not be modified.

// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// console.log(arr.slice(3));
// console.log(arr.slice(-2));
// console.log(arr.slice(3, -2));
// console.log(arr.slice(3, -9));
// console.log(arr.slice(2, -4));
// console.log(arr.slice(1, 5));
// console.log(arr.slice(-10, 8));
// console.log( arr.slice(-2) );
// console.log(arr);

// 8-6-22

// shallow copy 

// It happens only in object

// const a = {
//      em : 44 ,
//      airt : 446 ,
//      yub : 446
// }

// const b=a;
// b.yub = 8981;
// console.log(a)
// console.log(b)

// deep copy 

// let a=446;
// let b = a;
// b=4468;
// console.log(a)
// console.log(b)

// concate

// let arr=[5,45,46,4,6,4,6] , arr2 = [4,8,6,49];
// console.log([...arr,...arr2])

// let arr=[5,45,46,4,6,4,6] , arr2 = [4,8,6,49];
// let b = [...arr,...arr2]

// console.log(b)

// let arr=[5,45,46,4,6,4,6] , arr2 = [4,8,6,49];
// let b = [...arr,arr2]

// console.log(b)
 
// function 

// function fun_one(){
//     return 'hello'
// }

// console.log(fun_one())


// function fun_one(argr,argw,argt){
//     return `hello ${argr}, ${argw} and ${argt}`;
// }

// console.log(fun_one(10,20,30));

// 9-6-22

// function fun_one(ar1,arg2,arg3){
//     console.log(ar1,arg2,arg3); //UNDEFINED
// }
// fun_one();

// function fun_one(){
//     return 'hello'
// }
// function fun_two(){
//     return fun_one;
// }
// console.log(fun_two())// [Function: fun_one]
// console.log(fun_two); //[Function: fun_two]
// console.log(fun_two()()); //hello

// Function as a argument

// function one(arg,arg1,arg2){
//     console.log(arg(),arg1(),arg2()) // hello hello2 hello3
//     console.log(arg,arg1,arg2) // [Function: two] [Function: three] [Function: four]
// }
// function two(){
//     return 'hello'
// }
// function three(){
//     return 'hello2'
// }
// function four(){
//     return 'hello3'
// }
// one(two,three,four)

// let arr=[]ar
// function one(){
//     return 'hello'
// }
// for(let i=0;i<5;i++){
//     arr.push(one)
//     console.log(arr[i]()) //hello
// }
// console.log(arr) //  [Function: one],  [Function: two],  [Function: three],  [Function: four],  [Function: five]

// Arrow Function

// let fun_one = () =>{
//     return 'hello';
// }
// console.log(fun_one) //[Function: arr]
// console.log(fun_one()) //hello

// let fun_one=()=> 'hello';
// console.log(fun_one) //[Function: fun_one]
// console.log(fun_one())

// let fun_one = (arg1,arg2,arg3) => {
//     console.log(arg1(),arg2(),arg3()); //hello1 hello2 hello3
//     console.log(arg1,arg2,arg3); //[Function (anonymous)] [Function (anonymous)] [Function (anonymous)]
// }
// fun_one(
//     ()=>{
//         return 'hello1'
//     },
//     ()=>{
//         return 'hello2'
//     },
//     ()=>{
//         return 'hello3'
//     }
// )

// function fun_one(arg='nishchay'){
//     console.log(arg);
// }
// fun_one();//nishchay
// fun_one(undefined); //nishchay
// fun_one(null) //null

// 10-6-22

// Rest parameter

// It works in parameter at one time only
// It can take multiple paramater data

// function fun_one(...arg1){
//     console.log(arg1)
// }
// fun_one('hello ','My friend')

// IIFE Immediate Invokable Function Expression

// (()=>{
//     console.log('Hello world')
// })();

// let x = ((arg1)=>{
//     console.log(arg1)
// })('Hello');

// ((arg1)=>{
//     console.log(arg1)
// })(
//     (()=>{
//         return 'hello world'
//     })()
// )

// 11-6-22

// Call back Function:
// A callback function is a function passed into another function as an argument, 
// which is then invoked inside the outer function to complete some kind of routine or action.


// function one(param1){
//     console.log(param1)
// }
// function two(){ 
//     return "Hello world"
// }
// one(twqo())

// function one(param1){
//     console.log(param1())
// }
// one(function new_fun(){
//     return "This is callback Function"
// })

// function one(param1){
//     // console.log(param1)
//     // console.log(param1())
// }
// let three = () => {
//     return "Hello world"
// }

// one(three)

// one(()=>{
//     return "Hello World 2"
// })

// one(()=>'Hi')

// one(function (){
//     return "This is function"
// })

// function one(param1 , param2 , param3){
//     return (param1("Hello 1 ") + param2("Hello 2") + param3("Hello 3"))
// }
// one(
//     (param1)=>{
//         console.log(param1)
//     },
//     (param2)=>{
//         console.log(param2)
//     },
//     (param3)=>{
//         console.log(param3)
//     }
// )
// {
// let x = function one(param1){
//     console.log(param1)
// }
// one(90)

// }
// function one(param2){
//     console.log(param2)
// }
//  one(40)
//  one(20)

// 20-6-22

// Sync System
//In a synchronous system task are complete one after another

// console.log("HI")
// console.log("HI1")
// console.log("HI2")

//Async System

// setTimeout(()=>{
//     console.log("HI")
// },5000)

// console.log("Hello")

// HELL

// let flavour = {
//     fruits: ["strawberry","apple","banana","guvava"],
//     liquid: ["water","Ice"],
//     holder: ["cone","cup","Stick"],
//     toppings:["chocolate","vanela"]
// }
// let order = (fruit,productions) =>{
//     setTimeout(()=>{
//         console.log(`${flavour.fruits[fruit]} Was selected`);
//         productions();
//     },1000)
// }
// let production = () =>{
//     setTimeout(()=>{
//         console.log("Production is started")
//         setTimeout(()=>{
//             console.log("Fruits has been chopped")
//             setTimeout(()=>{
//                 console.log(`${flavour.liquid[0]} and ${flavour.liquid[1]} Has added`)
//                 setTimeout(()=>{
//                     console.log(`${flavour.holder[0]} has selected`)
//                     setTimeout(()=>{
//                         console.log(`${flavour.toppings[1]} toppings has selected`)
//                         setTimeout(()=>{
//                             console.log("Serve the icecream")
//                         },7000)
//                     },6000)
//                 },5000) 
//             },4000)
//         },3000)
//     },2000)
// }
// order(0,production)

// let a = [0];
// console.log(a[0]);
// console.log(a[0] == " "); //true
// console.log(" "); //false
// console.log([] === false);

// console.log(false == " "); //true
// console.log([] == 0); //true
// console.log([] == "0"); //false
// console.log([] == " "); //true
// console.log(false == " "); //true

// Promise

// 27-6-22

// function add(num, callback) {
//   return callback(num + 5, false);
// }

// function sub(num, callback) {
//   return callback(num - 3, false);
// }

// function mul(num, callback) {
//   return callback(num * 2, false);
// }

// function div(num, callback) {
//   return callback(num / 2 - 2, false);
// }

// add(5, (addRes, error) => {
//   if (!error) {
//     sub(addRes, (subRes, error) => {
//       if (!error) {
//         mul(subRes, (mulRes, error) => {
//           if (!error) {
//             div(mulRes, (divRes, error) => {
//               if (!error) {
//                 console.log(divRes);
//               }
//             });
//           }
//         });
//       }
//     });
//   }
// })

// Node Introduction

// Introduction
// ************
//     - NodeJS is the Server run time envriounment.

//     - NodeJS, used to implete the Servers.

//             Http Server

//             TCP Server

//     - we will implement Node Applications in two ways.

//         1) JavaScript

//         2) TypeScript
    
//     - JavaScript is the Scripting Language and won't supports OOPS.

//     - TypeScript is the Programming Language and supports OOPS.

//     - we will implement the servers by using either "predefined" or "3rd" party libraries


// 1) http

//     - http library used to develop the http servers.


// 2) fs

//     - fs stands for file system

//     - fs module, used to interact with the "flat files".

//     Ex
//         XML files

//         JSON files

//         Text Files


// 3) express

//     - express is the "framework".

//     - express framework used to develop the restful services.

//     Ex.
//         GET
//         POST
//         PUT
//         DELETE
//         PATCH


// 4) mysql

//     - used to interact with the mysql database.


// 5) mssql

//     - used to connect to SQLServer.


// 6) mongodb & mongoose

//     - either mongodb or mongoose used to connect to mongodb database.

//     - mongodb module will connect to mongodb database without "schema"

//     - mongoose module will connect to mongodb database with "Schema".

//     - Schema means rules and regulations.


// 6) cors

//     - used to enable the CORS Policy.

//     - enabling communication between different ports called as cors policy.


// 7) body-parser

//     - used to receive the data from client application


// 8) jwt-simple / jsonwebtoken

//     - used to generate the tokens.

//     - in general, we will use these tokens for authentication purpose.

//     - this authentication called as token based authentication.


// 9) multer

//     - used to upload the images to the server.


// 10) socket.io

//     - used to implement the chat applications


// 11) nodemailer

//     - it is used to send the email from node server

// 12) encryptjs

//     - used to encrypt/decrypt the passwords.


// Note : all the above libraries downloads to "node_modules" directory in current path


// Software Installations
// **********************

// 1) download and install NodeJS

// website : https://nodejs.org/en/

// file    : node-v16.6.1-x64.msi


// 2) install yarn tool

//     > npm install -g yarn

//     "-g" stands for global Installation


// 3) install nodemon tool

//     - it is used to start the node server in watch mode.

//     - this tool, watches the file changes continuosly.

//     > npm install -g nodemon


// 4) install Visual Studio Code

//     website : https://code.visualstudio.com/docs/?dv=win

//     file    : VSCodeUserSetup-x64-1.59.0.exe


// 5) install Postman

//     - used to test the rest api calls



// start the node server
// *********************
// Ex.
//     app.js


// > node app.js

// > nodemon app.js


// 1) ExpressJS

// 2) CRUD 

// 3) authentication & secuirity

// {
//     jwt Authentication 
//     md5
// }

// 4) exceptional handling


//                                 ***** ExpressJS *****

//     - ExpressJS is framework.

//     - ExpressJS used to develop the rest api's.

//             Ex.
//                     GET
//                     POST
//                     PUT
//                     DELETE
//                     PATCH
                    
//     - express is the 3rd party framework.

//     - we will download express library by using either "npm" or "yarn" tool

// //     - "express" framework downloads to "node_modules" folder in current path.

// HTTP Module  

// var http = require("http");
// console.log(typeof (http));
// var server = http.createServer((request, response) => {
//   response.setHeader("Content-type", "text/html");
//   res.writeHead(200, { "Content-Type": "text/html" });
//   response.write("<h1> Hello </h1>");
//   console.log(" request rec.. ");
//   response.end();
// });
// server.listen(7878, () => {
//   console.log("Listning 7878");
// });

//File System

// const fs = require("fs");
// fs.writeFile("demo.txt", "writing the data asynchronously", (err) => {

// });
// fs.writeFileSync("demo.txt", "writing the data synchrnously");


// fs.appendFile("demo.txt", "\n this is new line", (err) => {
//   if (err) throw err;
//   else console.log("data appended asynchronously");
// });
// fs.appendFileSync("demo.txt", "\ndata appended synchronously");

// fs.readFile("demo.txt", (err, data) => {
//         if (err) throw err;
//         else console.log(data.toString());
//     });
    
    // const result = fs.readFileSync("demo.txt");
    // console.log(result.toString());

// fs.openSync("demo.txt", "r+");
// console.log("file opened synchronously");


// fs.open("demo.txt", "r+", (err, fd) => {
//   if (err) console.log(err);
//   else {
//     fs.close(fd, (err) => {
//       if (err) throw err;
//       else {
//         console.log("file closed successfully");
//       }
//     });
//   }
// });

// fs.rename("newFile.txt", "demo.txt", renamingCompleted);
// function renamingCompleted(error) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("File Renamed...");
//   }
// }

// fs.readdir("d:\\SQ\\skillQodeNodeBatch_3", readDirCompleted);
// function readDirCompleted(error, file) {
//   if (error) {
//     console.log(error);
//   } else {
//     for (var i = 0; i < file.length; i++) {
//       console.log(file[i]);
//       // console.log(file[i].indexOf(".") > -1 ? "file : " : "folder", " - ", file[i]);
//     }
//   }
// }

// fs.unlink("demo.txt", (err) => {
//   if (err) throw err;
//   else {
//     console.log("file deleted successfully !!!");
//   }
// });

var str = 'hello this si nishchay'
var str2 = str.split('')
var temp="";
for(var i=str2.length;i>=0;i--){
    temp = str2[i]
    console.log(temp)
}