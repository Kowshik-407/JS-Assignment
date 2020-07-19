console.log('Welcome to the Task 5 ::) ');

/*
    The criteria as follows ::> 
        1. Sales from 0 - 5000              :       2%
        2. Sales from 5001 - 10000          :       5%
        3. Sales from 10001 - 20000         :       7%
        4. Above 20000                      :       10%
    
    Then log the total commission earned by him. 
*/

let no_employees = Number(prompt("Enter the Number of employees in your company ::> "));
let i = 1, profit = 0;
let commission = function(sales = sales_input){
    if (sales >= 0 && sales <= 5000){
        sales += (0.02) * sales;
    }                                          // Note : do no use sales in between 0 <= sales <= 5000.
    else if (sales >= 5001 && sales <= 10000){
        sales += (0.05) * sales;
    }                                         // For the first statement it is ok. But the next conditions 
    else if (sales >= 10001 && sales <= 20000){
        sales += (0.07) * sales;
    }                                        // will suffer a lot. Please remember it and if you want 
    else if (sales > 20000){
        sales += (0.1) * sales;
    }                                       //  you can try. It will give the same interest rate mentioned 1st.
    profit += sales;
}

// commission();
let sales_input;
while(i <= no_employees){
    sales_input  = Number(prompt('Enter the Sales made by an employee ::> '));
    commission();
    i++;
}


console.log('The total Commision Earned by Him ::> ', profit);