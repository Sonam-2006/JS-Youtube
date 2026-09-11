var c =300   // global scope

let a =300
if(true){ //block scope
let a =10
const b = 20
// var c = 30
console.log("Inner :",a); //10

//scope node me alg hai aur inspect me alg hota h 
}
console.log(a); //300
// console.log(b);
// console.log(c);

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

