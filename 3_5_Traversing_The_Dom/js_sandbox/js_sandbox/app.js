let val;


const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item');

val = listItem;
val = list;

//get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;


//1 element
//2 attribute
//3 text node
//8 comment
//9 document
//10 doctype

//get children element nodes
val = list.children;
val = list.children[2];
list.children[2].textContent = 'Piss';
// children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

//first child
val = list.firstChild;
val = list.firstElementChild;

// last child
val = list.lastChild;
val = list.lastElementChild;

//count child element
val = list.childElementCount;

//get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;

// get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);