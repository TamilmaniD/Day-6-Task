/*
I did a function within function. I know it’s not efficient, but was playing around.  The function of uberRate(customerCity, index), I'm gaining access to uberRate's array index by passing in the same index as customerCity.  It works until one day someone adds more cities and/or more rates, or some cities share same rate.
*/
 
let baseFee = .44
let cities = ["Salem", "Chennai", "Kovai", ]
let uberRates = [5, 10, 15]
// DRY = don't REPEAT yourself
//prompts to customer
let customerName = "Tamil" //prompt("What is your name?")
let customerCity = "Salem" //prompt("What is your city?")
//after the prompts, log to console customerName and welcome
console.log("Hello", customerName+ ", welcome to the Uber Rate Program")
//function that will getRate based on customerCity
function getRate(customerCity) {
  //uberRate function that will calculate the rate based on customerCity and index
  function uberRate(customerCity, index) {
    //calculate the final rate
    let finalRate = (uberRates[index]) * baseFee
    return finalRate
  }
  //log to the console customerCity and the finalRate after calling function uberRate and passing customerCity and index as parameters
  console.log(customerCity, "rate is:", uberRate(customerCity, cities.indexOf(customerCity)))
}
//call the getRate function passing in the customerCity arugment
getRate(customerCity)