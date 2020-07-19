console.log("Welcome to the Task 8 ::) ");
/* 
        function ask(question, yes, no){
            if(confirm(question)) yes()
            else no();
        }

        ask(
            "Do You Agree?",
            function() { alert("You agreed."); },
            function() { alert("You canceled the execution."); }
        );
*/

let ask = (question, yes, no) => {
    if(confirm(question)) yes();
    else no();
}

ask(
    "Do You Agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
);