const user = {email: 'jdoe@gmail.com'};

try {
  //produce a ReferenceError
  //myFunction();

  //produce a type error
  // null.myfunction();

  //syntax error
  //eval('Hello World');

  //will produce URI error
  // decodeURIComponent('%');

  if(!user.name) {
    //throw 'User has no name';
    throw new SyntaxError('user has no name');
  }

} catch(e) {
  console.log(`User Error: ${e.message}`);
  // console.log(e);
  //console.log(`${e.name}: ITS NULL STUPID!`);
  // console.log(e.message);
  // console.log(e.name);
  // console.log(e instanceof TypeError);
} finally {
  console.log('Finally Runs Regardless of result');
}

console.log('Program Continues...');