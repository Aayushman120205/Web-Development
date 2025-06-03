//for 

for(let i = 0; i <= 10; i++ ){
    console.log(i);
}

// while

// while (true) {
    
// }

//do - while

// do {
    
// } while (true);

//for of

let arr =[1,2,3,4,5]
for (const val of arr) {
    console.log(val)
}

let greetings ="Hello Everyone"
for (const greet of greetings) {
    if(greet==' '){
        continue;
    }
    console.log(`Each char is ${greet}`);
}

//maps 

const map = new Map()
map.set('In','India')
map.set('Us','Unites States')

console.log(map);

for (const [key,value] of map) {
    console.log(key + ":-" + value);
}

// cant iterate Object Using Forof loop
// forIn is used
const myObject = {
    js :"JavaScript",
    cpp : "C++",
    rb: "ruby",
    swift:"swift by apple"
}

for (const key in myObject) {
    console.log(key);
    console.log(myObject[key]);
}
let program = ["js","rb","swift","cpp"]

for (const key in program) {
    console.log(`Keys of Array ${key} and value :- ${program[key]}`);
}

// forOf loop for Arrays
// forIn loop for Object


