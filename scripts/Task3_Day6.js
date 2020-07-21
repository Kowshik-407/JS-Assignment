console.log('Welcome to the Task 3 ::) ');

async function fetchtodos(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data     = await response.json();
    console.table(data);
}

fetchtodos();