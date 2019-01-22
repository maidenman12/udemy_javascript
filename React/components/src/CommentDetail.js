import React from 'react';

const CommentDetail = (props) => {
    return (
        <div classname ="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={props.imageSrc} />
                </a>
                <div className="content">
                   <a href="/" className="author" >
                    {props.author}
                   </a>
                   <div className="metadata">
                    <span className="date"></span>
                    {props.timeAgo}
                   </div>
                   <div className="text"></div>
                   {props.message}
                </div>
            </div>
    );
};

export default CommentDetail;