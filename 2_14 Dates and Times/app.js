let val;

const today = new Date();
let birthday = new Date('6-6-1988')
birthday = new Date('06 June 1988 00:06:00')


val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1984);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);
console.log(birthday);