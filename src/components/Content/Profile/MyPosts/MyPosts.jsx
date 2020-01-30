import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx'

const MyPosts = (props) => {
    return (
        <div>
            My posts
            <div>
                New post
            </div>
            {props.postsElements}
        </div>
    )
}

export default MyPosts