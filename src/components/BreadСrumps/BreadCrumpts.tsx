import {FC} from 'react';
import s from './BreadCrumps.module.css';

interface BreadCrumpsProps {
    Url: string
}

const BreadCrumps: FC<BreadCrumpsProps> = (props: BreadCrumpsProps) => {
    return (
        <p className={s.bread__crumps}>Home / <span>{props.Url}</span></p>
    );
};

export default BreadCrumps;