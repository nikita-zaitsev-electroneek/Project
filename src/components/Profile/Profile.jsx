import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';

const Profile = () => {
    return <div className={s.profile}>
        <div>
            <img src="https://404store.com/2018/06/05/Canada_Mountains_Scenery_488936.jpg" />
        </div>
        <div >
            ava + description
        </div>
        <MyPosts />
    </div>
}

export default Profile