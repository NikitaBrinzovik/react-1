import s from './Message.module.css';
import {NavLink} from "react-router-dom";


const Message =(props) => {
    return (
        <div className={s.message}>
            <NavLink to={'/Message/ + props.touched'}> {props.text} </NavLink>
        </div>
    );
}

export default Message;