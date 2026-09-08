const accountId = 144553
let accountEmail ="sonam@google.com"
var accountPassword ="1256"
accountCity = "Jaipur"
let accountState   // undefined

// accountId = 2 //not allowed

accountEmail = "sona@.com"
accountPassword = "7418522"
accountCity ="mumbai"
console.log(accountId);


/*
Prefer not to use var
beacuse of issue in block scope and functional scope
*/

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])
