import { FC } from 'react';
import s from './../Blog.module.css';
import PostIcon from './../../../../assets/images/post.png';
import { Link } from 'react-router-dom';

interface PostProps {
    Date: string,
    Title: string,
    Text: string,
    Id: number
};

const Post: FC<PostProps> = (props: PostProps) => {
    return (
        <article className={s.post}>
            <div className={s.post__top}>
                <img src={PostIcon} alt="post__icon" className={s.post__icon} />
            </div>
            <div className={s.post__bottom}>
                <p className={s.post__date}>{props.Date}</p>
                <h4 className={s.post__title}>{props.Title}</h4>
                <p className={s.post__text}>{props.Text}</p>
                <Link to={"Post/" + props.Id} className={s.post__more}>
                    Read More
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.66666 7.81714C2.66666 7.56401 2.85476 7.35481 3.09881 7.3217L3.16666 7.31714L13.1667 7.31714C13.4428 7.31714 13.6667 7.541 13.6667 7.81714C13.6667 8.07027 13.4786 8.27947 13.2345 8.31257L13.1667 8.31714H3.16666C2.89051 8.31714 2.66666 8.09328 2.66666 7.81714Z" fill="#3D3D3D" />
                        <path d="M8.78066 4.15514C8.58498 3.9603 8.5843 3.64372 8.77914 3.44804C8.95627 3.27015 9.23401 3.25341 9.43006 3.39822L9.48624 3.44652L13.5196 7.46252C13.698 7.64017 13.7142 7.91891 13.5683 8.11496L13.5196 8.17111L9.48627 12.1878C9.29061 12.3826 8.97403 12.382 8.77917 12.1863C8.60203 12.0084 8.58646 11.7306 8.7321 11.5352L8.78063 11.4792L12.458 7.81663L8.78066 4.15514Z" fill="#3D3D3D" />
                    </svg>
                </Link>
            </div>
        </article>
    );
};

export default Post;