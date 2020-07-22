console.log('Welcome to the Task 2 ::) ');

let inp = Number(prompt('Enter a number to have a multiplication table ::> '));

for(let i = 1; i <= 10; i++){
    mul = inp * i;
    document.getElementById('table').innerHTML += `<li> ${inp}  x  ${i} = ${mul} </li>`;
    // document.write(mul);
}
document.body.style.backgroundColor = 'gray';
document.body.style.color           = 'aqua';
document.body.style.fontFamily      = 'Permanent Marker';