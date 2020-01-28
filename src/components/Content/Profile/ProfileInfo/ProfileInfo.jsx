import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return <div className={s.profileInfo}>
        <div>
            <img src="https://www.sunhome.ru/i/wallpapers/68/sinie-rozi.orig.jpg"/>
        </div>
        <div className={s.descriptionBlock}>
            ava + description
        </div>
    </div>
}

export default ProfileInfo