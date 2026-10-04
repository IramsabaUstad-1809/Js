const accountId = 144553
let accountEmail = "saba@gmail.com"
var accoundPassword = "1234"
accountCity = "Bangalore"
let accountState;
// accountId = 1// not allowed

accountEmail = "Iram@gmail.com"
accoundPassword = "1212154"
accountCity= "jaipur"

console.log(accountId)
/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accoundPassword, accountCity, accountState])

