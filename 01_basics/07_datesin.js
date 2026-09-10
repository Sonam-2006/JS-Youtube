//Dates
let myDate = new Date()
// console.log(myDate.toString());   //Thu Sep 10 2026 05:43:50 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());  //Thu Sep 10 2026
// console.log(myDate.toISOString());   //2026-09-10T05:47:39.203Z
// console.log(myDate.toJSON());       //2026-09-10T05:47:39.203Z
// console.log(myDate.toLocaleDateString());    //9/10/2026
// console.log(myDate.toLocaleString());      //9/10/2026, 5:47:39 AM
// console.log(myDate.toLocaleTimeString());   //5:47:39 AM
// console.log(myDate.toTimeString());  //05:50:43 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toUTCString());  //Thu, 10 Sep 2026 05:50:43 GMT


// console.log(typeof myDate);   //Object


// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toDateString());  //Mon Jan 23 2023

// let myCreatedDateTime = new Date(2026,8,26,11,5)
// console.log(myCreatedDateTime.toLocaleString());  //9/26/2026, 11:05:00 AM
   

// let myCreatedDate = new Date('2023,01,23')
// console.log(myCreatedDate.toLocaleString());  //1/23/2023, 12:00:00 AM
  
// let myCreatedDate = new Date('01-14-2026')
// console.log(myCreatedDate.toLocaleString());   //1/14/2026, 12:00:00 AM

// console.log(myCreatedDate.getTime());   // 1768348800000

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);    //1789020213605

// //for milliSecond
// console.log(Math.floor(Date.now()/1000));    //1789020213


let newDate = new Date()
// console.log(newDate);   //Thu Sep 10 2026 06:06:15 GMT+0000 (Coordinated Universal Time)
// console.log(newDate.getDay());  //4
// console.log(newDate.getMonth());   //9
// console.log(newDate.getFullYear());   //2026


newDate.toLocaleString('default',{weekday:'long'})







