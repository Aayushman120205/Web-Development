function addTwoNum(number1,number2){
    let run = number1+number2
    return run
}
const result = addTwoNum(3,5)
console.log("Result: ",result);

function LoginUserMsg(username = "sam"){
    if(!username){
        return "Pls Input Name"
    }
    return `${username} just logged in`
}

console.log(LoginUserMsg());
console.log(LoginUserMsg("hitesh"))
//console.log(LoginUserMsg())

function calculateCartPrice(...num1){
    let sum =0
    let x = 0
    while(x<num1.length){
        sum = sum + num1[x]
        x++
    }
    return sum
}
console.log(calculateCartPrice(200,600,500,400));

const user = {
    username:"Aayush",
    points:800
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and points is ${anyObject.points}`)
}
handleObject(user)
handleObject({
    username:"hitesh",
    points:399
})

const newArray =[200,50,80]

function returnSecondVal(anyArray){
    return anyArray[1]
}
console.log(returnSecondVal(newArray));

//**********************************************************************//

addone(5)
function addone(num){
    return num + 1
}

const addTwo = function(num){
    return num+2
}
addTwo(5)


const addThree = (num) => {
    return num+3
}
console.log(addThree(8));

const add = (num1,num2) => num1 + num2
const addMore = (num1,num2,num3) => (num1+num2+num3)
console.log(add(4,5));
console.log(addMore(6,5,8));

//**************IIFE

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

((name)=>{
    console.log(`DB CONNECTED ${name}`);
})("Aayush")

