const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

//clear input
taskInput.value = '';


//form.addEventListener('submit', runEvent);

// //key down
// taskInput.addEventListener('keydown', runEvent);
// //key up
// taskInput.addEventListener('keyup', runEvent);
//key up
// taskInput.addEventListener('keypress', runEvent);
//focus
// taskInput.addEventListener('focus', runEvent);
// //blur
// taskInput.addEventListener('blur', runEvent);
//cut
//taskInput.addEventListener('cut', runEvent);
//paste
//taskInput.addEventListener('paste', runEvent);
//input event
//taskInput.addEventListener('input', runEvent);
//input event
taskInput.addEventListener('input', runEvent);

function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);

    // console.log(e.target.value);

    // heading.innerText = e.target.value;

    // //get index value
    // console.log(taskInput.value);

    // e.preventDefault();
}