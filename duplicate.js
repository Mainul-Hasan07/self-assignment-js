const names = ['abul','babul','cabul','dabul','ebul','fabul','babul','ebul','babul','gabul','abul','habul','dabul'];
const numbers = [12,11,13,14,15,16,17,18,19,20,15,13,11,18,23,24,25,21,26,27];
function removeDuplicate(names){
    let uniqueName = [];
    for(const name of names){
        if(uniqueName.indexOf(name) == -1){
            uniqueName.push(name);
        }
    }
    return uniqueName;
}

const uniqeList = removeDuplicate(numbers);
console.log(uniqeList);