console.log("Welcome to the Task 6 ::) ");

// User needs to be enter a number which is > 100.

let inp = Number(prompt("Enter a number which is greater than 100 ::> "));

while(inp <= 100){
    inp = Number(prompt("Enter a number which is greater than 100 ::> "));
    console.log("Have a number which is greater than 100. Try again!!!")
}

console.log(`The ouput is '${inp}'  which is greater than 100. I made it clear. `);