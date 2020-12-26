import s from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src='http://retromap.ru/gallery/albums/userpics/10055/FF214d_1419161_medium.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava+jopa
            </div>
        </div>
    );
}

export default ProfileInfo;