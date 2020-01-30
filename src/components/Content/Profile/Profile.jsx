import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import state from "../../../redux/state";
import Post from "./MyPosts/Post/Post";

let postsElements = state.profilePage.postsData.map(m => <Post message ={m.message} likesCount ={m.likesCount} src = {m.src} />);

const Profile = (props) => {
    return <div className={s.profile}>
        <ProfileInfo/>
        <MyPosts postsElements={postsElements}/>
    </div>
}

export default Profile