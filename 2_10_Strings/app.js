const firstName = 'Rich';
const lastName = 'Hirst';
const age = 30;
const str = 'Hello there my name is Brad';
const tags = 'web design, web development';

let val;

val = firstName + lastName;

//conatication 

val = firstName + ' ' + lastName;

// append
val = 'Rich ';
val += 'Hirst';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

//escaping
val = 'That\'s awesome, I can\'t wait';

// length
val = firstName.length;

//concat
val = firstName.concat(' ', lastName);

//change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0];

//index of
val = firstName.indexOf('R');
val = firstName.lastIndexOf('R');

//charat
val = firstName.charAt('2');
// get last char
val = firstName.charAt(firstName.length -1);

//sub string
val = firstName.substring(0, 4);

//slice()
val = firstName.slice(0,4);
val = firstName.slice(-3);

//split()
val = str.split(' ');
val = tags.split(',');

//replace()
val = str.replace('Brad', 'Rich');

//includes()
val = str.includes('Hello');

console.log(val);