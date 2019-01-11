//import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


// create a react component
//Old
// const App = function() {
//     return <div>Hi there!</div>
// };

//new
const App = () => {
    const buttonText = { text: 'Click Me'};
    return (
        <div>
            <label className="label" htmlFor="name">Enter name:</label>
            <input id="name" type="text"/>
            <button style={{backgroundColor: 'blue' , color: 'white'}}>{buttonText.text}</button>
         </div>
    );
};

// take the react component and show on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);