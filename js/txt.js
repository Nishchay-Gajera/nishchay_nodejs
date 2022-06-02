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
