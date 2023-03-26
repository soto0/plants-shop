import {FC} from 'react';
import s from './../ProductTop.module.css';

const ProductPrompt: FC = () => {
    return (
        <div>
            <p className={s.prompt}>You are not login</p>
        </div>
    );
};

export default ProductPrompt;