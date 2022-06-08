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
// console.log(arr[3.0]);
// console.log(arr[3.1]);
// arr[3.5] = 45;
// arr["A"] = 110;

//declareration of array
// let arr = [5,8,9,4];
//console.log(arr)

// let arr = [5,6,8,9]
// arr[4] = 88;
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
// let arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// arr1.splice(4, 3);
// console.log(arr1);
// arr1.splice(6, 1);s
// console.log(arr1);
// arr1.splice(0, 1);
// console.log(arr1);
// arr1.splice(1, 1);
// console.log(arr1);
// arr1.splice(2, 0, 11, 12, 13);
// console.log(arr1);
// arr1.splice(1, 1, 11, 12);
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


function fun_one(argr,argw,argt){
    return `hello ${argr}, ${argw} and ${argt}`;
}

console.log(fun_one(10,20,30));