// window methods/ object / properit


//alert
// window.alert('Hello World');

// //prmopt
// const input = prompt();
// alert(input);

// //confirm
// if(confirm('Are you sure')){
//     console.log('YES');
// } else {
//     console.log('No');
// }

let val;

//outer height
val = window.outerHeight;
val = window.outerWidth;

//inner height
val = window.innerHeight;
val = window.innerWidth;

//scroll points
val = window.scrollY;
val = window.scrollX;

// location object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// //redirect
// //window.location.href = 'http://google.com';
// //reload
// window.location.reload();

//history object

// // window.history.go(-1);
// val = window.history.length;

//naivgator object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;

console.log(val);