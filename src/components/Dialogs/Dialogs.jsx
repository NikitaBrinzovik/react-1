import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';



const Dialogs = (props) => {

    let dialogsData =[
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Kirill'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Masha'},
        {id: 5, name: 'Kos'},
        {id: 6, name: 'Nikita'},
        {id: 7, name: 'Viktoria'},
        {id: 8, name: 'Polina'},
    ]

    let messagesData = [
        {id: 1, text:'privet', touched:'no'},
        {id: 2, text:'ne pichi mne bolche', touched:'no'},
        {id: 3, text:'kysay ego', touched:'no'},
        {id: 4, text:'nichego', touched:'no'},
        {id: 5, text:'poka', touched:'no'},
        {id: 6, text:'ffffffffffff', touched:'no'}
    ]

    let dialogsElements = dialogsData.map( dialog => <Dialog name={dialog.name} id={dialog.id}/>);
    let messagesElements =messagesData.map( m => <Message text={m.text} touched={m.touched} id={m.id}/>);

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