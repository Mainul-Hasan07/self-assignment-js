/* Explore Javascript */

// 01. write 3 variables (number,string,boolean)
var price = 100;
var bookName = 'Master';
var isGreen = true;
/* console.log(price);
console.log(bookName);
console.log(isGreen); */


// 02. 2 variables (let,const)
let mobilePrice = 5000;
mobilePrice = 15000;
const mobileColor = 'black';
/* console.log(mobilePrice);
console.log(mobileColor); */


// 03. Array
const array = [12,13,14,15,16,27,21,22,24,25];
for(const element of array){
    const result = element;
    // console.log(result);
}


// 04. simple Math Operators
const num1 = 25;
const num2 = 6;
const add = num1 + num2;
const decline = num1 - num2;
const multiply = num1 * num2;
const divide = num1 / num2;
const remain = num1 % num2;
/* console.log(add);
console.log(decline);
console.log(multiply);
console.log(divide);
console.log(remain); */



// 05. comparison
const compareNum = 24;
const compareNum2 = 25;
/* console.log(compareNum > compareNum2);
console.log(compareNum < compareNum2);
console.log(compareNum >= compareNum2);
console.log(compareNum <= compareNum2);
console.log(compareNum == compareNum2);
console.log(compareNum != compareNum2); */



// 06. logical Operators
const leapYear = 2000;
if((leapYear%4 ==0 && leapYear%100 != 0) || leapYear%400 == 0){
    // console.log(leapYear,' is a leap year');
}
else{
    // console.log(leapYear,' is not a leap year');
}



// 07. odd Number
let oddNumber = 7;
while(oddNumber <= 19){
    if(oddNumber%2 != 0){
        // console.log(oddNumber);
    }
    oddNumber++;
}



// 08. explore array
const names = ['kobir','sadia','somun','murad','modina','riad'];
// console.log(names.length);
names[2] = 'Mainul';
// console.log(names)
names.push('kawser');
// console.log(names)
names.push('siam');
// console.log(names)
names.pop();
// console.log(names);



// 09. for loop/for ---of loop
for(let i = 0;i <names.length; i++){
    const element = names[i];
    // console.log(element);
}

for(const element of names){
    // console.log(element);
}



// 10. display greater than 80 in array
const numbers = [122,23,432,42,453,543,544,23,14,86,95,85,89,100];
for(const number of numbers){
    if(number > 80){
        // console.log(number);
    }
}




// 11. multipication of three numbers with function
function multiplyOfThree (number1,number2,number3){
    const multipication = number1 * number2 * number3;
    return multipication;
}
const multiplyResult = multiplyOfThree(12,10,6);
// console.log(multiplyResult);



// 12. explore Object
let student1 ={
    name: 'alif',
    class: 11,
    height: '5 ft 6 inch',
    age: 18
}

console.log(student);
student.class = 12;
console.log(student);
console.log(student.class);