console.log("Welcome to the Task 1 ::) ");

let i = 1;
while (i <= 100){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("fizzbuzz");
    }
    else if(i % 3 == 0){
        console.log(`fizz`);
    }
    else if(i % 5 == 0){
        console.log('buzz');
    }
    i++;
}