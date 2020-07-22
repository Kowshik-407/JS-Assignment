console.log('Welcome to the Task 3 ::) ');

let name = String(prompt('Enter a number ::> ', 'Lets Upgraders' ));

document.getElementById('title').innerText += ` Hey, ${name} welcome to the HTML AND JS ::) `;
document.body.style.color = 'yellowgreen';
document.body.style.fontFamily = 'permanent marker';
// To have a clock inside the webpage.

const clk = document.getElementById('clock');
function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    clk.innerText = time;
}

setInterval(clock, 1000);

// To have a darkmode.

function darkMode(){
    document.body.style.backgroundColor = 'gray';
    document.body.style.color = 'blue';
    document.body.style.fontFamily = 'Courier New';
}

// const button = document.getElementById('dark');

// button.onclick = () => {
//     if(text.className == 'show'){
//         text.className == '';
//         button.innerText = 'Dark Mode';
//     }
//     else{
//         text.className = 'show';
//         button.innerText = 'Light Mode';
//     }
// }