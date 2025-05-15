let date = new Date()
console.log(date);
console.log(date.toDateString());
console.log(date.toString());
console.log(date.toLocaleString());

let myCreatedDate = new Date(2023,0,23)
let d1 = new Date(2023,0,23,5,3)
let d2 = new Date("2023-01-14")
let d3 = new Date("01-14-2023")
console.log(myCreatedDate.toDateString())
console.log(d1.toLocaleString());
console.log(d2.toLocaleString());
console.log(d3.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp)
console.log(Math.floor(Date.now()/1000));


console.log(myCreatedDate.getTime());
console.log(myCreatedDate.getDate());
console.log(myCreatedDate.getMonth());


let newDate = new Date()
newDate.toLocaleString('default',{
    weekday:"long",
})

