var c =300   // global scope

let a =300
if(true){ //block scope
let a =10
const b = 20
// var c = 30
// console.log("Inner :",a); //10

//scope node me alg hai aur inspect me alg hota h 
}
// console.log(a); //300
// console.log(b);
// console.log(c);

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }



// ---------------------------mested--------------------------

function one(){
    const username ="sonam"
    function two(){
        const website = 'youtube'
        console.log(username);
        
    }
    // console.log(website);
    two()
}
// one()

if(true){
    const username ="sonam"
    if(username === "sonam"){
        const website ="youtube"
        console.log(username+website);
        
    }
    // console.log(website);
    
}
// console.log(username); // its not scope



//++++++++++++++++++++++++++++++++++ intersting ++++++++++++++++++++++++++++++++++++++


console.log(addone(5)) // aise karne me error nhi ayega lakin 

function addone (num){
  return num +1
}


const addTwo= function(num){ // isko upar host karne me error ayega q ko function ko declaration ke sath variable me rakhe h 
    return num +2
}
addTwo(5)