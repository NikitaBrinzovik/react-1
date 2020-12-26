import s from './Profile.module.css'; //можно classes заменить любым именем
import MyPosts from './myPosts/myPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
    return (
        <div className={s.mainContent}>
            <ProfileInfo />
            <MyPosts />
        </div>
    );
}

export default Profile;