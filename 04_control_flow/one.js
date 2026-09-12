// if
 
const isUserLoggedIn = true

// if(2==='2'){
// console.log('executed');

// }
//<,>,>=,<=,==,!=,===

// const temp = 41
// if(temp<50){
//     console.log("less than 50");  
// }else{
//     console.log("temp is greater than 50");
// }


// const score = 200

// if(score > 100){
//     var power = 'fly'
//     console.log(`user power: ${power}`);
// }
//  console.log(`user power: ${power}`);


const balance = 1000
// if(balance>500) console.log("test"); // implicit scope
// console.log("test2");


// if(balance<500){
//     console.log("less than 500");
// }else if(balance<750){
//     console.log("less than 750"); 
// }else if(balance<900){
//      console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }  //1200


const userLoggedIn = true
const debitCard = true
const loggedInFromEmail = false

// if(userLoggedIn && debitCard){
//     console.log("Allow to buy course");
// }  // true


// if(userLoggedIn && debitCard && loggedInFromEmail){
//     console.log("Allow to buy course");
// }  //false


if(userLoggedIn || debitCard || loggedInFromEmail){
    console.log("Allow to buy course");
}  //Allow to buy course