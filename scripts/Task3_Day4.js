console.log("Executing the Task 3 ::) ");

let marks = Number(prompt("To Enter the marks and grade it ::) "));

let grade = (marks > 80 && marks <= 100) ? `Marks are ${marks} and grade is A`:
            (marks > 40 && marks <= 80)  ? `Marks are ${marks} and grade is B`:
            (marks > 35 && marks <= 40)  ? `Marks are ${marks} and grade is C`:
            (marks > 28 && marks <= 35)  ? `Marks are ${marks} and grade is D`:
            `Marks are ${marks} and grade is F`;

console.log(grade);