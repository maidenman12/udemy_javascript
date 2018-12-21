// const sayHello = function() {
//   console.log('Hello');
// }

// const sayHello = () => {
//   console.log('Hello');
// }

//one line function does not need braces
// const sayHello = () => console.log('Hello');


//one line retunrs
// const sayHello = () => 'Hello';

//return object
// const sayHello = () => ({msg: 'Hello' });

//single param does not need parenthesis
// const sayHello = name => console.log(`Hello ${name}`);

//multiple params need parenthesis
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello('Brad', 'Mike');

const users = ['Nathan', 'John', 'William'];

// const nameLengths = users.map(function(name) {
//   return name.length;
// });

//shorter
// const nameLengths = users.map((name) => {
//   return name.length;
// });

//shortest
const nameLengths = users.map(name => name.length);

console.log(nameLengths);