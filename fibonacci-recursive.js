/* function fibonacci(number){
    if(number == 0){
        return [0];
    }
    if(number == 1){
        return [0,1];
    }
    const fibo = fibonacci(number - 1);
    fibo[number] = fibo[number - 1] + fibo[number - 2];
    return fibo;
}

const fibonacciSeries = fibonacci(10);
console.log(fibonacciSeries); */



function fibonacci(n){
    const fibo = [0,1];
    if(n == 0){
        return 0;
    }
    if(n == 1){
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}
const fiboelement = fibonacci(10);
console.log(fiboelement);