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
                <Post message={postsData[0].message} numb={postsData[0].numb}/>
                <Post message={postsData[1].message} numb={postsData[1].numb}/>
                <Post message={postsData[2].message} numb={postsData[2].numb}/>
                <Post message={postsData[3].message} numb={postsData[3].numb}/>
                <Post message={postsData[4].message} numb={postsData[4].numb}/>
                <Post message={postsData[5].message} numb={postsData[5].numb}/>
                <Post message={postsData[6].message} numb={postsData[6].numb}/>
                <Post message={postsData[7].message} numb={postsData[7].numb}/>
            </div>
        </div>
    );
}

export default MyPosts;