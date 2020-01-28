import React from 'react';
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = () => {
    let dialogsData = [
        {name: 'Artem', id: '1'},
        {name: 'Natasha', id: '2'},
        {name: 'Denis', id: '3'}
    ];
    let messagesData = [
        {message: 'Hello'},
        {message: 'Whats up'},
        {message: 'How are you'},
        {message: 'How are'},
        {message: 'How'}
    ];

    let dialogsElements = dialogsData.map(d => <Dialog name = {d.name} id = {d.id}/>);
    let messagesElements = messagesData.map(m => <Message message = {m.message}/>);

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