import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div className="ui container comments">
            <div classname ="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" />
                </a>
                <div className="content">
                   <a href="/" className="author" >
                    Rich
                   </a>
                   <div className="metadata">
                    <span className="date">Today at 6:00pm</span>
                   </div>
                   <div className="text">Nice Blog post!</div>
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))