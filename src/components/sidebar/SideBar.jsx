import s from './SideBar.module.css';
import {NavLink} from "react-router-dom"; //можно classes заменить любым именем
import Galer from "../News/galer";

const SideBar = () => {
    return (
        <nav className={s.sideBar}>
            {/* два класса для profile: item и active */}
            <div className={`${s.item} ${s.active}`}>
                <NavLink to={'/profile'} activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/Dialogs'} activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/MyPhoto'} activeClassName={s.activeLink}>My photo</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/News'} activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/Settings'} activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/Friends'} activeClassName={s.activeLink}>Friends</NavLink>
                <div>
                    <Galer />
                    {/*<img src={https://to-name.ru/images/historical-events/white-movement.jpg}/>*/}
                </div>
            </div>
        </nav>
    );
}

export default SideBar;