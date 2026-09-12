// for 

for (let i = 0; i <10; i++) {
    const element = i;
    if (element==5) {
        // console.log("5 is best numbers");  
    }
    // console.log(element);
    
}
// console.log(element); // this is not accss on the scope


for (let i = 0; i <=10; i++) {
    console.log(`Outer loop valie: ${i}`);
  for (let j = 0; j <= 10; j++) {
    console.log(`Inner loop value ${j}`);
    
  }
    
}