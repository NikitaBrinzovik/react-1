import classes from './SideBar.module.css'; //можно classes заменить любым именем

const SideBar = () => {
    return (
        <nav className={classes.sideBar}>
            {/* два класса для profile: item и active */}
            <div className={`${classes.item} ${classes.active}`}>
                <a>Profile</a>
            </div>
            <div className={classes.item}>
                <a>My photo</a>
            </div>
            <div className={classes.item}>
                <a>Messages</a>
            </div>
            <div className={classes.item}>
                <a>News</a>
            </div>
            <div className={classes.item}>
                <a>Settings</a>
            </div>
        </nav>
    );
}

export default SideBar;