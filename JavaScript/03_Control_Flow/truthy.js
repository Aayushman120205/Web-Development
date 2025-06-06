//**************************************IMP ->
// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}



const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
console.log(val1);
val1 = null ?? 10
console.log(val1);
val1 = undefined ?? 15
console.log(val1);
val1 = null ?? 10 ?? 20
console.log(val1);

//Terniary Operator
//condition ? true:false

const icecreamPrice = 100
icecreamPrice>=80 ? console.log("more than 80"):console.log("less than 80");

