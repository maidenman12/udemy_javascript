//strings


const name1 = 'Jeff';
const name2 = new String('Jeff');

//name2.foo = 'bar';

console.log(typeof name2);

if(name2 === 'Jeff'){
  console.log('YES');
} else{
  console.log('NO');
}

// cnumber
const num1 = 5;
const num2 = new Number(5);

console.log(num2);

// boolean
const bool1 = true;
const bool2 = new Boolean(true);

console.log(typeof bool2);

// function
const getSum1 = function(x, y){
  return x + y;
}
console.log(getSum1(1,1));

const getSum2 = new Function('x','y', 'return 1 + 1');

console.log(getSum2(1,1));

//object
const john1 = {name: "John"};
const john2 = new Object({name: "John"});
console.log(john2);

//arrays
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

console.log(arr1);

//regular expressions

const re1 = /\w+/;
const re2 = new RegExp('\\w+');

console.log(re2);