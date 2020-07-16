console.log("Executing the Task 1 ::) ");

let inp = Number(prompt("Enter a number to check whether the following input is odd or not ::> "));

if(inp % 2 == 0){
    console.log(`The number entered is ${inp} and the Number is even.`);
}
else if(inp % 2 != 0){
    console.log(`The number entered is ${inp} and the Number is odd.`);
}
else{
    console.log(`The input number is invalid. Try to have a Number.`);
}