import s from './Message.module.css';
import {NavLink} from "react-router-dom";


const Message =(props) => {
    return (
        <div className={s.message}>
            <NavLink to={'/Message/ + props.id'}> {props.text} </NavLink>
        </div>
    );
};

export default Message;