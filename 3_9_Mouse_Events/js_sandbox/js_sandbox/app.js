const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

//click
// clearBtn.addEventListener('click', runEvent);
// //doubleclick
// clearBtn.addEventListener('dblclick', runEvent);
//MouseDown
// clearBtn.addEventListener('mousedown', runEvent);
//MouseUp
// clearBtn.addEventListener('mouseup', runEvent);
// //MouseEnter
// clearBtn.addEventListener('mouseenter', runEvent);
// //MouseEnter
// clearBtn.addEventListener('mouseleave', runEvent);
// //MouseOver
// clearBtn.addEventListener('mouseover', runEvent);
// //MouseOut
// clearBtn.addEventListener('mouseout', runEvent);
//mousemove
card.addEventListener('mousemove', runEvent);

//event handler
function runEvent(e){
    console.log(`Event Type: ${e.type}`);

    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY}, 40)`;
}