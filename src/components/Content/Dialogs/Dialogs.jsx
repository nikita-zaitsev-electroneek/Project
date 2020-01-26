import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/1" activeClassName={s.activeDialog}>Artem</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2" activeClassName={s.activeDialog}>Natasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3" activeClassName={s.activeDialog}>Vasya</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hello</div>
                <div className={s.message}>Whats up</div>
            </div>
        </div>
    )
}

export default Dialogs