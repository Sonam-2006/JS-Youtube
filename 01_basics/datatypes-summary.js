// # Primitives
//7 types : string , Number , Boolean , Null, Undefined , Symbol ,BigInt
 
const score = 200;
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined
const id = Symbol('1230')
const anotherId = Symbol('1230')
const bigNumber = 12345678900987654n

console.log(id === anotherId);  //false

// # Reference type (Non Primitive)
//Array ,Object , Function

const heros = ["shaktiman", "naagraj","doga"];
let myObj ={
    name: "hitesh",
    age:22,
}

const myFunction =function(){
    console.log("Hello World");
}
console.log(typeof null); //object
console.log(typeof myFunction); //function is a function but its object function
console.log(typeof myObj); //onject


//  JavaScript is a dynamically typed language.
