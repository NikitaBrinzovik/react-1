import classes from './myPosts.module.css'; //можно classes заменить любым именем
import Post from './Posts/Post';

const MyPosts = () => {
    return (
        <div>
            my posts
            <div>
                new posts:
                    <textarea></textarea>
                <button>send post</button>
                <button>remove post</button>
            </div>
            <div className={classes.item}>
                <Post message='Hi, how are you?' numb='122'/>
                <Post message="It's my first post" numb='12'/>
            </div>
        </div>
    );
}

export default MyPosts;