import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
    <div className="ui container comments">
        <ApprovalCard>
            <div>
            <h4>Warning!</h4>
            Are you sure you want to do this?
            </div>
        </ApprovalCard>
        
        <ApprovalCard>
        <CommentDetail 
        author="Sam" 
        timeAgo="Today at 4:44pm"
        message="Hi" 
        imageSrc={faker.image.avatar()}
        />
        </ApprovalCard>

        <ApprovalCard>
        <CommentDetail 
        author="Rich" 
        timeAgo="Today at 2:46am" 
        message="Hello"
        imageSrc={faker.image.avatar()}
        />
        </ApprovalCard>

        <ApprovalCard>
        <CommentDetail 
        author="Dave" 
        timeAgo="Yesterday at 5:44pm" 
        message="Leave me alone" 
        imageSrc={faker.image.avatar()}
        />
        </ApprovalCard>
    </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))