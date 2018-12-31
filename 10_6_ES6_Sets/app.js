// sets - store unique values of any type

const set1 = new Set();

// add values to set 
set1.add(100);
set1.add('A string');
set1.add({name: 'Rich'});
set1.add(true);

const set2 = new Set([1, true, 'string']);
console.log(set2);

console.log(set1);

//get count
console.log(set1.size);

//check for values
console.log(set1.has(100));
console.log(set1.has(50+50));


// delete from set
set1.delete(100);

console.log(set1);

//iterating through sets

//for...of
for(let item of set1) {
  console.log(item);
}

//foreach
set1.forEach((value) => {
  console.log(value);
});

//convert set to array
const setArr = Array.from(set1);
console.log(setArr);