import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';



const Dialogs = (props) => {
    return (
        <div className={s.allChats}>
            <div className={s.allDialogs}>
                <Dialog name={'Dima'} id={'1'}/>
                <Dialog name={'Kirill'} id={'2'}/>
                <Dialog name={'Sasha'} id={'3'}/>
                <Dialog name={'Viktor'} id={'4'}/>
                <Dialog name={'Kos'} id={'5'}/>
                <Dialog name={'Nikita'} id={'6'}/>
                <Dialog name={'Viktoria'} id={'7'}/>
                <Dialog name={'Polina'} id={'8'}/>
            </div>

            <div className={s.messages}>
                <Message text={'privet'} touched={'no'}/>
                <Message text={'ne pichi mne bolche'} touched={'no'}/>
                <Message text={'kysay ego'} touched={'no'}/>
                <Message text={'nichego'} touched={'no'}/>
                <Message text={'poka'} touched={'no'}/>
                <Message text={'ffffffffffff'} touched={'no'}/>
            </div>
        </div>
    );

}

export default Dialogs;