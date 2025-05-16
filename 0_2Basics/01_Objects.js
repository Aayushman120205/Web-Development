const mySym = Symbol("key1") // declaring symbol

//object literals
const jsuser = {
    name : "Aayuhsman",
    "Full Name" : "Aayushman Seh",
    [mySym] :"myKey1",
    age : 18,
    location : "Delhi",
    email: "aayushman@google.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday","Saturday"]
}

console.log(jsuser.email)
console.log(jsuser["email"]);
console.log(jsuser["Full Name"]);
console.log(jsuser[mySym]);

jsuser.email = "aayushman@chatgpt.com"

jsuser.greeting = function(){
    console.log("Hello JS user");
}
jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());

// object is singlton when constructed by constructor

const regularUser = {
    email: "some@google.com",
    fullname: {
        userfullname:{
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}
const obj6 ={5:"e",6:"f"}
const obj3 = {obj1,obj2}
const obj4 = Object.assign({},obj1,obj2)
console.log(obj3)
console.log(obj4);

const obj5 ={...obj1,...obj2,...obj6}
console.log(obj5);



//Array Containing Object
const users = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
]
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name ="Sammy"
tinderUser.isLoggedIn = false

console.log(users[1].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course ={
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor:instructor} = course

console.log(instructor);
