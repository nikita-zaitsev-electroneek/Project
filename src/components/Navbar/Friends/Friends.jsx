import React from 'react';
import s from './Friends.module.css';

const Friends = (props) => {
    return (
        <div className={s.friend}>
            <div>
                {props.name}
            </div>
            <div>
                <img src = {props.src}/>

                {console.log(props)}
            </div>
        </div>
    )
}

export default Friends