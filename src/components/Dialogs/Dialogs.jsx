import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {


    let dialogsElements = props.dialogsData.map(d => <Dialog name={d.name} id={d.id}/>);
    let messagesElements = props.messagesData.map(m => <Message text={m.text} touched={m.touched} id={m.id}/>);

    return (
        <div className={s.allChats}>
            <div className={s.allDialogs}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );

}

export default Dialogs;