console.log("Welcome to the Task 7 ::) ");
console.log(' ');
let n = Number(prompt('Enter the number to print the range of prime numbers from 2 to n ::> '));
function isPrime(num){
    for(let i = 2; i < num; i++){
        if(num % i == 0) return false;
    }
    return true;
}

function display(n){
    let arr = [2];
    for (let i = 3; i < n; i += 2){
        if(isPrime(i)) arr.push(i);
    }
    console.log(`The Number of Prime Numbers in between 2 and ${n} ::> `, arr);
}

display(n);