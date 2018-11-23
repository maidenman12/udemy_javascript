const id = 100;

// //equal to
// if(id == 100){
// console.log('Correct');
// } else {
//     console.log('incorrect');
// }

// //not equal to
// if(id != 101){
// console.log('Correct');
// } else {
// console.log('incorrect');
// }

// // 
// //equal to value and type
// if(id === 100){
//     console.log('Correct');
//     } else {
//     console.log('incorrect');
//     }

// //not equal to value and type
// if(id !== 100){
//     console.log('Correct');
// } else {
//     console.log('incorrect');
// }

// //test if undefined
// if(typeof id !== 'undefined'){
//     console.log(`The ID is ${id}`);
// } else {
//     console.log('NO ID');
// }

// greater or less than
// if(id <= 100){
//      console.log('Correct');
// } else {
//      console.log('incorrect');
// }

// if else

const colour = 'green';

// if(colour === 'yellow'){
//     console.log('Colour is yellow')
// } else if(colour === 'blue'){
//     console.log('colour is blue');
// } else {
//     console.log('colour is not yellow or blue');
// }

//logical operators

const name = 'Steve';
const age = 50;

// and &&
if(age > 0 && age <= 12){
    console.log(`${name} is a child`);
} else if(age >= 13 && age <=19){
    console.log(`${name} is a tenneager`);
} else {
    console.log(`${name} is an adult`);
}

// or ||
if(age < 16 || age > 65){
    console.log(`${name} can not run in race`)
} else {
    console.log(`${name} is registered for the race`)
}

// ternary operator
console.log(id === 100 ? 'correct' : 'incorrect');

// without curly braces
if(id===100)
console.log('correct');
else
console.log('incorrect');