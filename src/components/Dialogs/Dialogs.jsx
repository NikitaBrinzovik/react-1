import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {


    let dialogsElements = props.state.dialogsData.map(d => <Dialog name={d.name} id={d.id} src={s.srcA}/>);
    let messagesElements = props.state.messagesData.map(m => <Message text={m.text} touched={m.touched} id={m.id}/>);

    return (
        <div className={s.allChats}>
            <div className={s.allDialogs}>
                {dialogsElements}
            </div>
            <div className={s.avatar}>
                <img src={'https://navegante.ru/Insignia/Down/x1_1792.jpg'}/>
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );

}

export default Dialogs;