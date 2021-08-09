function getNunber (number){
    const numberList = [];
    for(let i =1; i<=number; i++){
        if( i%3 ==0 && i%5 == 0){
            numberList.push('foobar');
        }
        else if(i % 3 == 0){
            numberList.push('foo');
        }
        else if (i % 5 == 0){
            numberList.push('bar');
        }
        else{
            numberList.push(i);
        }
    }
    return numberList;
}
const numbers = getNunber(100);
console.log(numbers);