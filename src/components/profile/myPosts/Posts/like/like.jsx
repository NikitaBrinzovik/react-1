import styles from './like.module.css';
// import likeBtn from './click';

const Likes = (props) => {

    return(
        <div>
            <button className={ styles.Like } id='likeBtn'>like</button>
            { props.numb }
        </div>
    );
};



export default Likes;