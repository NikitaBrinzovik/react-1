import s from './Post.module.css'; //можно classes заменить любым именем
import Likes from './like/like'; 

const Post = (props) => {
    
    return (
        <div className={s.item}>
            <img src='https://fb.ru/misc/i/gallery/5308/2580837.jpg' alt='happy face' />
                { props.message }
            <div className={s.likesStyle}>
                <Likes />
            </div>
            <div>
                { props.numb}
            </div>
        </div>
    );
};

export default Post;