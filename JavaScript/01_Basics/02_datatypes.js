"use strict";
//alert(3+3) // we are using node js not browser
console.log(3+3)
console.log("Hitesh")

let name ="Aayush"
let age = 20
let logedIn = false 
let stack = null
console.log(stack)
//numer => 2 to pwr 53
//bigInt
//string
//boolean => true/false
//null => standalone value
//undefined => 
//symbol => unique

//object

console.log(typeof "Aayush");
console.log(typeof null);
console.log(typeof undefined);

// Primitve data tyeps
// 7 types - string , number , bigint , boolean , symbol,null

// Non - Primitive Dara Types
// array, object, functions

// JavaScript is Dynalic Language

//STACK used in primitive data type
//HEAP used in non-primitive data type

let MyName = "Aayushman"

let anotherName = MyName;
anotherName = "Aayush";

console.log(MyName);
console.log(anotherName);

let userone = {
    email:"user@gmail.com",
    upi:"user@ybl"
}

let userTwo = userone

userTwo.email = "used@mail.com"

console.log(userone);

console.log(userTwo);



