const marvel_heros = ['thor','Ironman','spiderman']
const dc_heros = ['superman','flash','batman']

// marvel_heros.push(dc_heros)
// console.log(marvel_heros); //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]


// const allHeros =marvel_heros.concat(dc_heros)
// console.log(allHeros);


// //spread
// const allHero2 = [...marvel_heros,...dc_heros]
// console.log(allHero2);


// const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_arr = another_arr.flat(Infinity)
// console.log(real_arr);  //(11) [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


console.log(Array.isArray('Sonam')) //flase
console.log(Array.from('Sonam'))  // ['S', 'o', 'n', 'a', 'm']
console.log(Array.from({name:"sonam"})); // []-->intersting
 
let score1 =100
let score2 =200
let score3 = 300
console.log(Array.of(score1,score2,score3));  //[100, 200, 300]
