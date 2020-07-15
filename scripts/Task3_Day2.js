// Brief Intro on available datatypes in Javascript. 

// alert("Today task can be started with an alert function ::) ")

console.log('Using The String Datatype ::) ')
var a = 'Hello HTML';  // Single Quotes
var b = "Hello JS";    // Double Quotes
console.log(a,b);
console.log(' ')

console.log('Using The Number Datatype :;) ')
var a = 25; 
var b = 80.5;
var c = 4.25e-3;
var d = 4.25e+7;
console.table(a,b,c,d);
console.log(' ')

console.log(7 / 0);
console.log(-38 /0);
console.log(7 / -0);
console.log(-38 / -0);
console.log(' ')

console.log('Some Text' / 2);
console.log('Rama Loves Sita. Sita Loves Rama' / 2 + 10);
console.log(Math.sqrt(-1));
console.log(' ')

console.log('Using Boolean Datatype ::) ');
var isreading = true;    // yes, i'm reading.
var issleeping = false;  // yes, i'm not sleeping.
console.log(isreading, issleeping)
var a = 38, b = 143, c = 7;

console.log(b > a);
console.log(b > c);
console.log(' ');

console.log('Using Undefined Datatype ::) ');
var x , y = 'Kowshik407';
console.log(x,y);
console.log(' ');

console.log('Using Null Datatype ::) ');
var x , y = 'kowshik407';
console.log('Without Null ::) ', x,y);
var x = null , y = null;
console.log('With Null ::) ', x,y);
console.log(' ');

console.log('Using Object Datatype ::) ');
var emptyObject = {};
var person = {
    Name : 'Dwayne Johnson', 
    Username : 'The Rock',
    Age : 45,
}
console.log(person);
console.log(' ');

console.log('Using Array Datatype ::) ');
var months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
var days   = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
console.table({months,days});
console.log('Using The Name Of The Month ::> ',months[7],'Using The Name Of The Day ::> ', days[3]);
console.log(' ');

console.log('Using function Datatypen::) ');
function create_Greeting(name){
    return 'Hello' + name;
}
function display_Greeting(greetingFunction, Username){
    return greetingFunction(Username);
}
var result = display_Greeting(create_Greeting, ' Kowshik407');
console.log("The Output of the Following Function ::> ", result);
console.log(' ');

console.log('Using typeof Operator');
var one = typeof(15), two = typeof(42.7), three = typeof(2.5e-4), four = typeof(Infinity), five = typeof(NaN);
var six = typeof(true), seven = typeof(false), eight = typeof(undefined), nine = typeof(undeclaredVariable), ten = typeof(null);
var eleven= typeof{ name : 'Kowshik407', age : 18}, twelve = typeof[1,2,3,4,5,6,7], thirteen = typeof(function(){})
console.table({one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen});
console.log(' ');

console.log('<:: The End ::>')