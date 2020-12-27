import s from './Profile.module.css'; //можно classes заменить любым именем
import MyPosts from './myPosts/myPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Post from "./myPosts/Posts/Post";

let postsData =[
    {id: 1, message: 'Hi, how are you?', numb:122},
    {id: 2, message: 'It\'s my first post', numb:2},
    {id: 3, message: 'Sasha', numb:22},
    {id: 4, message: 'Masha', numb:3},
    {id: 5, message: 'Kos', numb:1},
    {id: 6, message: 'Nikita', numb:333},
    {id: 7, message: 'Viktoria', numb:2},
    {id: 8, message: 'Polina', numb:11}
]

export let postsElements = postsData.map( p => <Post message={p.message} numb={p.numb} id={p.id}/>);




const Profile = () => {


    return (
        <div className={s.mainContent}>
            <ProfileInfo />
            <MyPosts />
        </div>
    );
}

export default Profile;
