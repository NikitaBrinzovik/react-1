import s from './Profile.module.css'; //можно classes заменить любым именем
import MyPosts from './myPosts/myPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return (
        <div className={s.mainContent}>
            <ProfileInfo/>
            <MyPosts postsData={props.profilePage.postsData}
                     addPost={props.addPost}
                     newPostText={props.profilePage.newPostText}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    );
}

export default Profile;
