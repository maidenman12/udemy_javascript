const colour = 'red';

switch(colour){
    case 'red':
    console.log('colour is red');
    break;
case 'blue':
    console.log('colour is blue');
    break;
default:
    console.log('colour is not red or blue');
    break;
}

let day;

switch(new Date().getDay()){
case 0:
    day = 'Sunday';
    break;
case 1:
    day = 'Monday';
    break;
case 2:
    day = 'Tuesday';
    break;
case 3:
    day = 'Wednesday';
    break;
case 4:
    day = 'Thursday';
    break;
case 5:
    day = 'Friday';
    break;
case 6:
    day = 'Saturday';
    break;
}

console.log(`Today is ${day}`);