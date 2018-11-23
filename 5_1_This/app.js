// object literall - before
// const rich ={
//   name: 'Rich',
//   age: 30
// }

// console.log(rich);

//Person Constructor
function Person(name, dob) {
  this.name = name;
  // this.age = age;
  //console.log(this);
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}


// console.log(this);

// // this.alert(1);
// const rich = new Person ('Rich', 30);
// const dave = new Person ('Dave', 34);

// console.log(dave.age);

const rich = new Person('Rich', '6/6/1988')

console.log(rich.calculateAge());