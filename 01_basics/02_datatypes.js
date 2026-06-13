"use strict"; // treat all JS code as newer version 

// alert( 3 + 3) // we are using nodejs, not browser (this will not work here, but in browser it will work and show alert box with 6 in it)

console.log(3 
    +
     3) // code readability should be high (not good practice, it works but not good for readability)

console.log("Hitesh")


let name = "Hitesh"      // String
let age = 18             // Number
let isLoggedIn = true    // Boolean
let state;               // Undefined
let value = null;        // Null
let id = Symbol("123")   // Symbol
let bigNum = 12345678901234567890n // BigInt

// number => 2 to power 53 (range)
// bigint => for large numbers
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object ..

console.log(typeof undefined); // undefined
console.log(typeof null); // object