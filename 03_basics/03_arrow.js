const user ={
    username :"sonam",
    age:20,

    welcomeMessage: function(){
     console.log(`${this.username},welcome to website`);
      
    }
}
// user.welcomeMessage()//sonam,welcome to website
// user.username ="sona"
// user.welcomeMessage()  //sona,welcome to website
// console.log(this); //{}
//browser ke andar jb bhi run karta h vo h global engine


// function chai(){
//     let username ="sonam"
//     console.log(this);
    
// }
// chai()

// const chai = function(){
//     let username ="sonam"
//     console.log(this.username);
    
// }
// chai() // undefined

// const chai =()=>{
//     let username ="sonam"
//     console.log(this);
    
// }
// chai() //{}


//-------------------explict return-------------------
// const addTwo = (num1, num2)=>{
//     return num1 + num2
// }
// console.log(addTwo(3,5));//8


//------------------implicit return dont use {} and return function
// const addTwo = (num1, num2)=>(num1 + num2)


const addTwo = (num1, num2)=>({username:'Sonam'})

console.log(addTwo(3,5));//8
