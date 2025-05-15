// console.log(2>1);
// console.log(2<1);
// console.log(2==1);
// console.log(2>=1);
// console.log(2!=1);

console.log("2" > 1);
console.log("02" > 1);

console.log(null >0);//false
console.log(null==0);//false
console.log(null>=0);//true

// the reason is that an eqaulity check == and comparisons > , < and >= , <= works different
// comparisions convert null to a number, treating it as 0. That's why (3) null >=0 true 
// while (1) null>0 is false

console.log(undefined==0);
console.log(undefined>=0);
console.log(undefined<0);

// === strict check also check the data type
console.log("2"==2); // only converts to number and check is it correct.
console.log("2"===2); // it also check the data type , is the data type same or different.











