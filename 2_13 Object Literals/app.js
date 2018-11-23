const person = {
  firstName: 'Rich',
  lastName:'Hirst',
  age: 30,
  email: 'richardhirst@aol.com',
  hobbies: ['music', 'anime'],
  address: {
    city: 'edinburgh'
  },
  getBirthYear: function(){
    return 2018 - this.age;
    }
}

let val;

val = person;
//specific value
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies[1];
val = person.address.city;
val = person.getBirthYear();


console.log(val);

const people = [
  {name: 'John', age: 30},
  {name: 'mike', age: 23}
];

for(let i = 0; i < people.length; i++){
  console.log(people[i].name);
}