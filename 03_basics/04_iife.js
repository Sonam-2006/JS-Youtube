//Immediately Invoked Function Expressions (IIFE)

//-------------------this is name iife
(function chai(){
    console.log(`DB CONNECTED`);
    
})();
//----------global scope ke poluation se hoti h problem usess global scope ko hate  ke liye ham IIFE function use karte h ()()

//()(); do IIFE function likha ho to error na aye to hame :; use karte h

//-----------------this is unnamed iife
((name)=>{
    console.log(`Helllo guys ${name}`);
    
})("sonam")