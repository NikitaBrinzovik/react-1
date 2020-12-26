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


    return (
        <div className={s.allChats}>
            <div className={s.allDialogs}>
                <Dialog name={dialogsData[0].name} id={dialogsData[0].id}/>
                <Dialog name={dialogsData[1].name} id={dialogsData[1].id}/>
                <Dialog name={dialogsData[2].name} id={dialogsData[2].id}/>
                <Dialog name={dialogsData[3].name} id={dialogsData[3].id}/>
                <Dialog name={dialogsData[4].name} id={dialogsData[4].id}/>
                <Dialog name={dialogsData[5].name} id={dialogsData[5].id}/>
                <Dialog name={dialogsData[6].name} id={dialogsData[6].id}/>
                <Dialog name={dialogsData[7].name} id={dialogsData[7].id}/>
            </div>

            <div className={s.messages}>
                <Message text={messagesData[0].text} touched={messagesData[0].touched}/>
                <Message text={messagesData[1].text} touched={messagesData[1].touched}/>
                <Message text={messagesData[2].text} touched={messagesData[2].touched}/>
                <Message text={messagesData[3].text} touched={messagesData[3].touched}/>
                <Message text={messagesData[4].text} touched={messagesData[4].touched}/>
                <Message text={messagesData[5].text} touched={messagesData[5].touched}/>
            </div>
        </div>
    );

}

export default Dialogs;