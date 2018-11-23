//var, let, const

// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// // init var
// var greeting;
// console.log(greeting);
// greeting = 'hello';
// console.log(greeting);

// // letters, numbers, _, $ - conditions for a variable
// // cannot start with a number

// //multiple word vars
// var firstName = 'john'; //camel case - best convention
// var first_name = 'Sara'; //underscore
// var FirstName = 'tom'; //pascalcase - OOP

//LET
// let name;
// name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// //CONST
// const name ='john';
// console.log(name);
// // cannot reassign
// //name = 'sara';
// //Have to assign a value
// const greeting;

const person = {
    name:'john',
    age: '30'
}

person.name= 'sara';
person.age='32';

console.log(person);

const numbers= [1,2,3,4,5];
numbers.push(6);

console.log(numbers);