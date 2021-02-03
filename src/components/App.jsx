import React from 'react';
import Comment from './Comment';
import Approval from './Approval';

//Create React component

export default function App () {
    return (
      <div className = "ui container comments">
        <Approval>
            <Comment author="Sam" comment="Nice Blog Post!!!" timeAgo="Today at 2:00AM" />
        </Approval>
        <Approval>
            <Comment author="Alex" comment="AWWWWWWW!!!" timeAgo="Today at 00:00AM" />
        </Approval>
        <Approval>
            <Comment author="Jane" comment="NOOOOOOOO!!!" timeAgo="Today at 5:00PM" />
        </Approval>
      </div>
    )
  }  