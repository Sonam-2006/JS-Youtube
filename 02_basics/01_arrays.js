array
 const myArr = [0,1,2,3,4,5]
 console.log(myArr[0]);//indexing start 0


 //Shallow copy --> a shallow copy is an object is a copy whose properties share the same reference (point to the same underlying values) as those.
 //Deep copy --> a deep copy of an object is a copy whose properties do noot share the same reference (point of the same underlying values )as thode.
   
 const myHeros =['saktimaan','doremon','salmaan']
 console.log(myHeros); //[ 'saktimaan', 'doremon', 'salmaan' ]
 

 const myArr2 = new Array(1,2,3,4)
 console.log(myArr2); //[ 1, 2, 3, 4 ]
 

 ///Array Methods 

 myArr.push(6)
 myArr.push(7)
 myArr.pop()
 myArr.unshift(9)
 myArr.shift()
 console.log(myArr.includes(9));  //false
 console.log(myArr.indexOf(19));   //-1
 console.log(myArr.indexOf(2));   //2

  console.log(myArr);  ///[0, 1, 2, 3, 4, 5, 6]


  const newArr = myArr.join()
  console.log(myArr);  //[0, 1, 2, 3, 4, 5, 6]
  console.log(newArr); //0,1,2,3,4,5,6


  //slice , splice
  console.log("a", myArr);   //a [0, 1, 2, 3,4, 5, 6]
  const myn1 = myArr.slice(1,3)
  console.log(myn1);   //[ 1, 2 ]
  console.log("b",myArr);  //b [0, 1, 2, 3,4, 5, 6]
  
  const myn2 = myArr.splice(1,3)
  console.log('c',myArr);   //c [0, 4, 5, 6]
  console.log(myn2);  // [1, 2, 3]
  
  
  