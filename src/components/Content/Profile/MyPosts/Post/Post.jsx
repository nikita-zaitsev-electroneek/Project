import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='http://primrep.ru/wp-content/uploads/2016/01/avatar-320x240.jpg' />
            {props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post