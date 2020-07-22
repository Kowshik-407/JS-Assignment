console.log('Welcome to the Task 1 ::) ');

// Array of colors 
const arr = ['aqua', 'wheat', 'orange', 'red', 'greenyellow', 'blue', 'darkmagenta'];
let i = 0;
const changeColor = document.getElementById('bgColor');
function bgColorChange(){
    document.body.style.backgroundColor = arr[i];
    i = (i + 1) % arr.length;
}

setInterval(bgColorChange, 5000)
