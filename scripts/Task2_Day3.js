// String Methods

console.log("Using The String Methods ::) ");

let text = 'The Beggining is the end and the end is the beginning.'
// Which can have a single Output has a property. 
console.log(text.length); 

// Which can have a Multiple sequence of Outputs has a method(). 
console.log(text.anchor('Predestination'));
console.log(text.big());
console.log(text.blink());
console.log(text.bold());
console.log(text.charAt('7'));
console.log(text.charCodeAt('7'));
console.log(text.codePointAt('7'));
console.log(text.concat("It's Amazing"));
console.log(text.endsWith("beginning."));
console.log(text.fixed());
console.log(text.fontcolor('Green'));
console.log(text.fontsize('7'));
console.log(text.includes('beginning'));
console.log(text.indexOf('end'));
console.log(text.italics());
console.log(text.lastIndexOf('is'));
console.log(text.link('www.google.com'));
console.log(text.localeCompare('end'));
let res = text.match(/nd/g);
console.log(res);
let abt = 'caf\u00E9'
console.log(text.normalize() == abt.normalize());
console.log(text.repeat(3));
console.log(text.replace('end', 'friend'));
console.log(text.search('is'));
console.log(text.slice(0,7));
console.log(text.small());
console.log(text.split(' '));
console.log(text.startsWith('The'));
console.log(text.strike());
console.log(text.sub());
console.log(text.substr(7,38));
console.log(text.substring(7,38));
console.log(text.sup());
console.log(text.toLocaleLowerCase());
console.log(text.toLocaleUpperCase());
console.log(text.toLowerCase());
console.log(text.toString());
console.log(text.toUpperCase());
console.log(text.trim());
console.log(text.valueOf());

console.log(' ');
console.log(' ');
console.log(' ');

// Array Methods

console.log('Using The Array Methods ::) ');

let array1 = ['The', 407, 'beginning', 438, 'is' , 445, 'the', 431, 'end', 415, "K AND A"];
array2 = Array.from(array1);
console.log(array1, array2);
console.log(array2.toString());
console.log(array2.join(' $ '));
console.log(array2.pop());
console.log(array2.push('K AND A'));
console.log(array2)
console.log(array2.shift());
console.log(array2.unshift('The'));
console.log(array2)
console.log(array2[3] = 424);
console.log(array2)
console.log(array2[array2.length] = "It's Amazing");
console.log(array2);
console.log( delete array2[11]);
console.log(array2);
array2.splice(2, 0, 'Unknown', 'Stranger')  // Here 2 represents two elements to be added and 0 represents no elements to be removed. 
console.log(array2);
array2.splice(2, 2, 'before', 'after')  // Here 2 represents two elements to be added and 2 represents two elements to be removed. 
console.log(array2);
console.log(array2.splice(0, 1));
console.log(array2);
console.log(array2.concat(['Email', 1234 , 'fact', 765432n]));
ar1 = ['Email', 1234 , 'fact', 765432n];
ar2 = [938, '143 HTML AND JS', 331, 'JavaScript', 467];
console.log(array2.concat(ar1, ar2));
console.log(array2.concat(ar1));
console.log(array2.slice(1,3));
console.log(array2);
console.log(array2.slice(2));
console.log(array2);
console.log(array2.toString());
console.log(array2);


var person = {
    fullname : function(){
        return this.firstName + ' ' + this.lastName;
    }
}
var person1 = {
    firstName : 'HTML',
    lastName  : 'JS'
}
console.log(person.fullname.apply(person1));