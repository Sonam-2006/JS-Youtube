function sayMyName (){
    console.log("s");
    console.log("o");
    console.log("n");
    console.log("a");
    console.log("m");
    
}
// sayMyName()

// function addTwoNum(num1, num2){
//     console.log(num1 + num2);
    
// }
addTwoNum(2,8) //10


function addTwoNum(num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
    
}
const result = addTwoNum(5,8)
// console.log("Result:" , result);


function loginUserMessage (username ="sonam"){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in` 
}
// console.log(loginUserMessage("Sonam"));  //Sonam just logged in
// console.log(loginUserMessage());   //undefined just logged in



function calculateCartPrice (val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(100,900,500,200,300,400)); ///[ 500, 200, 300, 400 ]


const user ={
    username:"sonam",
    price:199
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
// handleObject(user)

handleObject({
    username:"sonam",
    price:999
})
const myNerArray =[100,900,500,200,300,400]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNerArray));
console.log(returnSecondValue([100,900,500,200,300,400]));

