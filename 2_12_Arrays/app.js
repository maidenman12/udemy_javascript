// create some arrays
const numbers = [43,56,33,12,54];
const numbers2 = new Array(22,54,58,12);
const fruit = ['apple','banana','orange'];
const mixed = [22, 'hello', true, undefined, null, new Date()];

let val;

//get array length
val = numbers.length;
//check if is array
val = Array.isArray(numbers);
//get single value
val = numbers[3];
val = numbers[0];
// insert into array
numbers[2] = 100;
//find index of a value
val = numbers.indexOf(12);

//mutating arrays
//add on to end of array
numbers.push(250);
//add on to front of array
numbers.unshift(3);
//take off from end
numbers.pop();
//take off from front
numbers.shift();
//splice values (where want to start and end)
numbers.splice(1,3);
//reverse
numbers.reverse();

//concatenate array
val = numbers.concat(numbers2);

//sorting arrays
val = fruit.sort();
val = numbers.sort();

// use compare
val = numbers.sort(function(x,y){
  return x - y;
});

// reverse sort
val = numbers.sort(function(x,y){
  return y - x;
});

//find
function under50(num){
  return num < 50;
}

val = numbers.find(under50);

console.log(numbers);
console.log(val);