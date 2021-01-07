import s from './Dialog.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}> {props.name} </NavLink>
            <img src={props.sr} />
        </div>
    )
}

export default Dialog;

//
// можно то же самое записать так:
//     const Dialog = (props) => {
//         return (
//             <div className={s.dialog + ' ' + s.active}>
//                 <NavLink to={'/Dialogs/1' + props.id}> {props.name}</NavLink>
//             </div>
//         )
//     }
