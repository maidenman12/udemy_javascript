// function declarations

function greeting(firstName = 'John', lastName = 'Doe'){
    //console.log('Hello');
    return 'Hello ' + firstName + ' ' + lastName;
}

//console.log(greeting('John', 'Doe'));

//function expressions

const square = function(x){
    return x*x;
};

// console.log(square(8));

//iifes

(function(){
    console.log('IIFE Ran..');
})();

(function(name){
    console.log('Hello '+ name);
})('Brad');

//property methods

const todo = {
    add: function(){
        console.log('to do..');
    },
    edit: function(id){
        console.log(`edit to ${id}`);
    }
}

todo.add();
todo.edit(22);