import React from 'react';
import s from './Dialogs.module.css';
import state from '../../../redux/state'
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";

let dialogsElements = state.dialogsPage.dialogsData.map(d => <Dialog name = {d.name} id = {d.id}/>);
let messagesElements = state.dialogsPage.messagesData.map(m => <Message message = {m.message}/>);

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs