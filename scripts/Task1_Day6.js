console.log('Welcome to the Task 1 ::) ');

let inp = Number(prompt("Enter a positive number, if not the default value can be taken. ::> ", 7));

while(inp < 0){
    inp = Number(prompt("Enter a number which is positive ::> "));
}

let arr = [];
while(inp >= 0){
    arr.push(inp);
    inp--
}
console.log(arr.reverse());


let oddCubes = arr.filter(el => el % 2 != 0).map(el => el ** 3);
console.log(`Using both filter and map function to eliminate the even numbers and have a cubes of the odd numbers ::> ${oddCubes}`);