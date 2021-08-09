const greeting = 'Hello, How are you?'
function reverseString(string){
    let reverse = '';
    for(const element of greeting){
        reverse = element + reverse;
    }
    return reverse;
}

const reversed = reverseString(greeting);
console.log(reversed);