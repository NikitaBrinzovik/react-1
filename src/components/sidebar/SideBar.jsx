import s from './SideBar.module.css';
import {NavLink} from "react-router-dom"; //можно classes заменить любым именем

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
                <a href={'/MyPhoto'}>My photo</a>
            </div>
            <div className={s.item}>
                <a href={'/News'}>News</a>
            </div>
            <div className={s.item}>
                <a href={'/Settings'}>Settings</a>
            </div>
        </nav>
    );
}

export default SideBar;