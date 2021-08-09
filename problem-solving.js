/* function getFactorial(number){
    let factorial = 1;
    for(let i = 1; i<=number; i++){
    factorial = factorial * i;
}
return factorial;
}

const factorialResult = getFactorial(10);
console.log(factorialResult) */;


// 0. recursion 
function getFactorial(number){
    if(number == 0){
        return 1;
    }
    return number * getFactorial(number - 1)
}
const factorialResult = getFactorial(10);
// console.log(factorialResult);

function getFibonacci (number){
    if(number == 0){
        return [0];
    }
    if(number == 1){
        return [0,1];
    }
    const febo = getFibonacci(number - 1);
    febo[number] = febo[number-1] + febo[number-2];
    return febo;
}
const fibonacciResult = getFibonacci(10);
// console.log(fibonacciResult);



// 01. conversation(Feet To Inch)
function feetToInch (feet){
    const inch = feet *12;
    return inch;
}

const inchResult = feetToInch(10);
// console.log(inchResult);



// 02. conversation(Centimeter To Meter)
function centimeterToMeter(centimeter){
    const meter = centimeter / 100;
    return meter;
}

const meterResult = centimeterToMeter(200);
// console.log(meterResult);




// 03. calculation(page Requirements)
function paperRequirements (book1,book2,book3){
    const paparPerBook1 = 100;
    const paparPerBook2 = 200;
    const paparPerBook3 = 300;
    const book1paper =book1 * paparPerBook1;
    const book2paper = book2 * paparPerBook2;
    const book3paper = book3 * paparPerBook3;
    const totalPaper = book1paper + book2paper + book3paper;
    return totalPaper;

}

const totalBookPaper = paperRequirements(3000,2500,1500);
// console.log(totalBookPaper);





// 04. Best Friend by Character in Array
const friends = ['kawser','siam','moni','nazmul','rejoan','mehedi','sojib','tarek','hasan','sayem','onu','badhon','lotus','sowrov','somun','shahab','asraful','iqram','ashu','touhid','emon','amit','polok','joy','shamim'];
function bestFriend(names){
    let largestchar = friends[0];
    for(const friend of friends){
        if(friend.length > largestchar.length){
            largestchar = friend;
        }
    }
    return largestchar;
}

const bestFriendByLetter = bestFriend(friends);
// console.log(bestFriendByLetter);






// 05. Display positive Number in Array
const marks =[12,2,4,5,7,9,-4,0,-9,15,25,-12-10,-3,-5,-2.5,-1,50,40,45,35,47]
function getPositiveMark (marks){
    positiveMarks = [];
    for(const mark of marks){
        if(mark > 0){
            positiveMarks.push(mark);
        }
        else{
            break;
        }
    }
    return positiveMarks;
}

const marksList = getPositiveMark(marks);
console.log(marksList);