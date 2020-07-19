console.log('Welcome to the Task 4');

// Calculator for only two operations.

let move1   = Number(prompt('Enter the input ::> '));
let operator = prompt("Enter the operators for the foll. operations. operators are [+, -, *, /, ^, %]::> ");
let move2   = Number(prompt('Enter the input ::> '));
let result = 0;

let calculation = function(input1 = move1, input2 = move2){
    if (operator == '+'){
        result = input1 + input2;
    }
    else if (operator == '-'){
        result = input1 - input2;
    }
    else if (operator == '*'){
        result = input1 * input2;
    }
    else if (operator == '/'){
        result = input1 / input2;
        result = Math.floor(result);
    }
    else if (operator == '%'){
        result = input1 % input2;
    }
    else if (operator == '^'){
        input2 = 0;                 // sqrt results for only one input. Therefore, we are making inp2 = 0
        result = Math.sqrt(result); // There will no issue by making inp2 = 0. You can have a test in this !
    }
}

calculation();

let move   = prompt("Do you want to move further more to do the next step (yes / no) Just have y or n ::> ");
let move3;
while(move == 'y'){
    operator = prompt("Enter the operators for the foll. operations. operators are [+, -, *, /, /^, %]::> ");
    move3    = Number(prompt("Enter the input ::> "));
    calculation(input1 = result, input2 = move3);
    move     = prompt("Do you want to move further more to do the next step (yes / no) ::> ");
}

console.log('The output of the calculation ::> ', result);