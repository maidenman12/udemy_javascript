// for loop

// for(let i = 0; i < 10; i++){
//     if(i === 2){
//         console.log('2 is my favourite number');
//         continue;
//     }

//     if(i === 5){
//         console.log('Stop');
//         break;
//     }
//     console.log('Number ' + i);
// }


//while loop

// let i = 0;

// while(i < 10){
//     console.log('Number ' + i)
//     i++
// }

// do while

// let i = 0;

// do{
//     console.log('Number ' + i);
//     i++
// }

// while(i < 10);


//lopp through array
const cars = ['Ford', 'Volvo', 'Honda', 'Rover']

// for(let i = 0; i < cars.length; i++){
//     console.log(cars[i]);
// }

// // for each
// cars.forEach(function(car){
//     console.log(car);
// });

//map
// const users = [
//     {id:1, name: 'John'},
//     {id:2, name: 'Sara'},
//     {id:3, name: 'Richard'},
// ];

// const ids = users.map(function(user){
//     return user.id;
// });

// console.log(ids);

//for in loop
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
}

for(let x in user){
    console.log(`${x} : ${user[x]}`);
}