import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {


    let dialogsElements = props.state.dialogsData.map(d => <Dialog name={d.name} id={d.id} sr={d.sr}/>);
    let messagesElements = props.state.messagesData.map(m => <Message text={m.text} touched={m.touched} id={m.id}/>);

    let newMessage = React.createRef();

    let sendMessage = () => {
        let newText = newMessage.current.value
        alert(newText)
    }

    return (
        <div className={s.allChats}>
            <div className={s.newMessages}>New message:</div>
            <div className={s.newMessages}>
                <textarea ref={newMessage}></textarea>
                <button onClick={sendMessage}>send</button>
            </div>
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