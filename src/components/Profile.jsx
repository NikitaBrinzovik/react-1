import classes from './Profile.module.css'; //можно classes заменить любым именем

const Profile = () => {
    return(
        <div className={classes.mainContent}>
            <div>
                <img src='http://retromap.ru/gallery/albums/userpics/10055/FF214d_1419161_medium.jpg' />
            </div>
            <div>
                <img src='https://tea-homenn.ru/wp-content/uploads/2020/05/yabloko_kvadrat.jpg' />
            </div>
            <div>
                my posts
                <div>
                    new posts
                </div>
                <div className={classes.item}>
                                        posts 1
                </div>
                <div className={classes.item}> 
                                    posts 2
                </div>
            </div>
        </div>
    );
}

export default Profile;