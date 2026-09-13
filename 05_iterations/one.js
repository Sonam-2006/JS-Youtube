// for 

for (let i = 0; i <10; i++) {
    const element = i;
    if (element==5) {
        // console.log("5 is best numbers");  
    }
    // console.log(element);
    
}
// console.log(element); // this is not accss on the scope


// for (let i = 0; i <=10; i++) {
//     console.log(`Outer loop valie: ${i}`);
//   for (let j = 0; j <= 10; j++) {
//     console.log(`Inner loop value ${j}`);
    
//   }
    
//}

//table
// for (let i = 1; i <=10; i++) {
//   console.log(`outer loop value ${i}`);
//   for (let j = 1; j <=10; j++) {
//    console.log(i + '*' + j + '=' + i*j);
   
    
//   }  
// }

// let myArray =['flash ','batman','superman']
// console.log(myArray.length);

// for (let i = 0; i < myArray.length; i++) {
//   const element = myArray[i];
//   console.log(element); 
// }

// break and continue

// for (let index = 0; index < 20; index++) {
//   if (index ==5) {
//     console.log(`Deteched 5`);
//     break
//   }
//   console.log(`value of index is ${index}`); 
// }



for (let index = 0; index < 20; index++) {
  if (index ==5) {
    console.log(`Deteched 5`);
   continue
  }
  console.log(`value of index is ${index}`);
  
  
}