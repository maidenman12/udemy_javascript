const personPrototypes = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newLastName) {
    this.lastName = newLastName;
  }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

mary.getsMarried('Thompson');

console.log(mary.greeting());

const rich = Object.create(personPrototypes, {
  firstName: {value: 'rich'},
  lastName: {value: 'hirst'},
  age: {value: 30}
});

console.log(rich);

console.log(rich.greeting());