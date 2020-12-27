import s from './Profile.module.css'; //можно classes заменить любым именем
import MyPosts from './myPosts/myPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    // debugger
    return (
        <div className={s.mainContent}>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}/>
        </div>
    );
}

export default Profile;
