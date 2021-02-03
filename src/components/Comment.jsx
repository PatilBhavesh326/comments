import React from 'react';

export default function Comment(props){
    return (
        <div className = "comment">
          <a href="/" className="avatar">
             <img alt="avatar" src='https://source.unsplash.com/random' />
          </a>
          <div className="content">
              <a href="/" className="author">
                {props.author}
              </a>
              <div>
                <span className="date">{props.timeAgo}</span>
              </div>
              <div className="text">{props.comment}</div>
          </div>
        </div>
    );
}
