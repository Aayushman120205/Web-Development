let arr = [0,1,2,3,4,5]
let nums = new Array(0,1,2,3,4)

console.log(`${arr[0]} ${nums[2]}`)

// Methods -->

arr.push(6)
arr.push(7)
console.log(arr)
arr.pop()
console.log(arr);

arr.unshift(9) // addes element in starting of array
console.log(arr);
arr.shift() //used to remove element from starting

console.log(arr.includes(9));
arr.push(3);
console.log(arr.indexOf(3));
console.log(arr)

let strArr = arr.join()
console.log(strArr);

console.log("A",arr);

let myArr = arr.slice(1,3);
console.log(myArr);

console.log("B",arr);

let myArr2 = arr.splice(1,3)
console.log(myArr2)

console.log("C",arr)


