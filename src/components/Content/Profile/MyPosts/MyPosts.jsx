import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx'

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                New post
            </div>
            <Post message = ' Hi, how are you' likesCount = '1'/>
            <Post message = ' It is my first posts' likesCount = '2'/>
        </div>
    )
}

export default MyPosts