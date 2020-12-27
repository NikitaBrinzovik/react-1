import s from './myPosts.module.css'; //можно classes заменить любым именем
import Post from './Posts/Post';

const MyPosts = () => {

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

    let postsElements = postsData.map( p => <Post message={p.message} numb={p.numb} id={p.id}/>);

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
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;