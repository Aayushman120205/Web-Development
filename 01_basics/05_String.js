let name="Hitesh"
let school = "jms"

console.log(`Hello my name is ${name} and studied from school ${school}`);

const gameName = new String('bgmi') // another way to create string

console.log(gameName[2]);
console.log(gameName.charAt(3));
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charCodeAt('m'));
console.log(gameName.substring(0,2));
// console.log(gameName.slice(-4,2));

let check = "  Aayush  "
console.log(check);
console.log(check.trim());

let url = "www.hitesh-chaudary%20Creator.com"
console.log(url.replace('%20','-'))

console.log(url.includes('-'));

const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);
console.log(balance.toString())
console.log(balance.toFixed(2));

let otherNum = 23.6889
console.log(otherNum.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));

// ************************* Maths *************************************

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(3,5,9,6));
console.log(Math.max(3,5,9,6));

console.log(Math.random());
console.log((Math.random()*10)+1);

let min = 10
let max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min)





