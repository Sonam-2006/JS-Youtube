const name = "sonam"
const repoCount = 50
// console.log(name + repoCount + "value");


// ( ` `)---->string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//Hello my name is sonam and my repo count is 50

const gameName = new String('Sonam-ydv-mjg')
console.log(gameName[0]); //S
console.log(gameName.__proto__); //{}


console.log(gameName.length);  //9
console.log(gameName.toUpperCase());  //SONAM-YDV
console.log(gameName.charAt(2));  //n
console.log(gameName.indexOf('t'));   //-1
  
const newString = gameName.substring(0,4)
console.log(newString);   //Sona

const anotherString = gameName.slice(-8,4)
console.log(anotherString);   //ona


const newString1 = "   Sonam   "
console.log(newString1);  //Sonam  
console.log(newString1.trim);


const url = "https://sonam.com/sonam%20yadav"
console.log(url.replace('%20','-'));   //https://sonam.com/sonam-yadav

console.log(url.includes('sundar')); //false

console.log(gameName.split('-'));   //[ 'Sonam', 'ydv', 'mjg' ]


