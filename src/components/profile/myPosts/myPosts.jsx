import s from './myPosts.module.css'; //можно classes заменить любым именем
import Post from './Posts/Post';

const MyPosts = () => {
    return (
        <div className={s.postBlock}>
            <h3>My Posts</h3>
            <div>
                <h4>new post: </h4>
                <div><textarea></textarea></div>
                <button>send post</button>
                <button>remove post</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?' numb='122'/>
                <Post message="It's my first post" numb='12'/>
            </div>
        </div>
    );
}

export default MyPosts;