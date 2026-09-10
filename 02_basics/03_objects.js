// singleton  --->koi constructor se bnte h to singleton hota h 
//object.create 
//object Literals

const mySym = Symbol("key1")

const JsUser ={
name:"sonam",
"full name":"Sonam Yadav",
[mySym]:"myKey1",
age :20,
locartion:"Bhopal",
email:"sonam@gmail.com",
isLoggedIn:false,
 lastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.email); //sonam@gmail.com
// console.log(JsUser["email"]);  //sonam@gmail.com
// console.log(JsUser["full name"]);  //Sonam Yadav
// console.log(  JsUser[mySym]);  //myKey1

JsUser.email="sona@chatgpt"
// Object.freeze(JsUser)
// JsUser.email="sona@gpt"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User , ${this.name}`);
    
}
console.log(JsUser.greeting()); //undefined

console.log(JsUser.greetingTwo())