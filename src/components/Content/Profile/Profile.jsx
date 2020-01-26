import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';

const Profile = () => {
    return <div className={s.profile}>
        <div>
            <img src="https://www.sunhome.ru/i/wallpapers/68/sinie-rozi.orig.jpg"/>
        </div>
        <div>
            ava + description
        </div>
        <MyPosts/>
    </div>
}

export default Profile