import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx'

const MyPosts = () => {
    let postsData = [
        {message: ' Hi, how are you', likesCount: '1', src: '//primrep.ru/wp-content/uploads/2016/01/avatar-320x240.jpg'},
        {message: ' It is my first posts', likesCount: '23', src: 'https://www.1zoom.ru/big2/856/329183-alexfas01.jpg'}
    ]

    let postsElements = postsData.map(m => <Post message ={m.message} likesCount ={m.likesCount} src = {m.src} />)

    return (
        <div>
            My posts
            <div>
                New post
            </div>
            {postsElements}
        </div>
    )
}

export default MyPosts