// reduce
// const num = [1,2,3,4,5,6,7,8,9]

// const initialValue = 0;
// const sumWithInitial = null.reduce(
//     (accumulator,currentValue)=> accumulator + currentValue,
//     initialValue
// )
// console.log(sumWithInitial);

const num = [1,2,3,4,5]

// const myTotal = num.reduce(function(acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc+ currval
// },0)
// console.log(myTotal);

// const myTotal = num.reduce((acc,curr)=> acc+curr,0)
// console.log(myTotal);


const shopingCart=[
    {
        itenName: 'js course',
        price : 2999
    },{
        itenName: 'cpp course',
        price : 1999
    },{
        itenName: 'java course',
        price : 4999
    },{
        itenName: 'python course',
        price : 3999
    }
]

const priceToPay = shopingCart.reduce((acc,curr)=>acc+curr.price,0)
console.log(priceToPay);
