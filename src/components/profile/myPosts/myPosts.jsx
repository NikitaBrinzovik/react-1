import s from './myPosts.module.css'; //можно classes заменить любым именем
import Post from "./Posts/Post";
import React from "react";


const MyPosts = (props) => {

    let postsElements =
        props.postsData.map(p => <Post message={p.message} numb={p.numb} id={p.id}/>);

    let newPostEl= React.createRef()

    let addPosts = () => {
        let text= newPostEl.current.value;
        props.addPost(text);
        props.updateNewPostText('');

    }

    let onPostChange = () => {
        let text= newPostEl.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postBlock}>
            <h3>My Posts</h3>
            <div>
                <h4>new post: </h4>
                <div>
                    <textarea onChange={onPostChange} ref={newPostEl} value={props.newPostText}/>
                </div>
                <button onClick={addPosts}>send post</button>
                <button>remove post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;