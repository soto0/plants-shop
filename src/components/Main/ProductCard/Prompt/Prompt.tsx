import {FC} from 'react';
import s from './../ProductCard.module.css';

const Prompt: FC = () => {
    return (
        <div className={s.prompt}>
            You are not login
        </div>
    );
};

export default Prompt;