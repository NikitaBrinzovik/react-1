import s from './galer.module.css'
import {NavLink} from "react-router-dom";
import Gal from "./gal/gal";


const Galer = (props) => {

    return (
        <div className={s.avaBlock}>

            <img src='https://to-name.ru/images/historical-events/white-movement.jpg'/>
            <img src='https://to-name.ru/images/historical-events/white-movement.jpg'/>
            <img src='https://to-name.ru/images/historical-events/white-movement.jpg'/>

        </div>
    );

};

export default Galer;