import s from './like.module.css';
// import likeBtn from './click';

const Likes = (props) => {

    return(
        <div>
            <button className={ s.Like } id='likeBtn'>like</button>
            { props.numb }
        </div>
    );
};



export default Likes;