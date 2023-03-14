import {FC} from 'react';
import { NavLink } from 'react-router-dom';
import s from './Categories.module.css';
import Banner from './../../assets/images/banner.png';

const Categories: FC = () => {
    return (
        <div className={s.categories}>
            <h3 className={s.title}>Categories</h3>
            <div className={s.categories__list}>
                <NavLink to='House-Plants' className={({ isActive }) => isActive ? s.categories__link_active : s.categories__link}>Potter Plants<span>(33)</span></NavLink>
                <NavLink to='Potter-Plants' className={({ isActive }) => isActive ? s.categories__link_active : s.categories__link}>House Plants<span>(12)</span></NavLink>
                <NavLink to='Seeds' className={({ isActive }) => isActive ? s.categories__link_active : s.categories__link}>Seeds<span>(65)</span></NavLink>
                <NavLink to='Small-Plants' className={({ isActive }) => isActive ? s.categories__link_active : s.categories__link}>Small Plants<span>(39)</span></NavLink>
                <NavLink to='Big-Plants' className={({ isActive }) => isActive ? s.categories__link_active : s.categories__link}>Big Plants<span>(23)</span></NavLink>
                <NavLink to='Succulents' className={({ isActive }) => isActive ? s.categories__link_active : s.categories__link}>Succulents<span>(17)</span></NavLink>
                <NavLink to='Terrariums' className={({ isActive }) => isActive ? s.categories__link_active : s.categories__link}>Terrariums<span>(19)</span></NavLink>
                <NavLink to='Gardening' className={({ isActive }) => isActive ? s.categories__link_active : s.categories__link}>Gardening<span>(13)</span></NavLink>
                <NavLink to='Accessions' className={({ isActive }) => isActive ? s.categories__link_active : s.categories__link}>Accessions<span>(18)</span></NavLink>
            </div>
            <h3 className={s.price__title}>Price Range</h3>
            <div className={s.price__block}>
            <input type="range" min="39" max="1230" className={s.price} />
            <p className="price__count">Price: <span>$39</span></p>
            <button className="button filter__button">Filter</button>
            </div>
            <h3 className={s.size__title}>Size</h3>
            <div className={s.size__list}>
                <p className={s.size}>Small<span>(119)</span></p>
                <p className={s.size}>Medium<span>(86)</span></p>
                <p className={s.size}>Large<span>(78)</span></p>
            </div>
            <img src={Banner} alt="banner" className={s.banner} />
        </div>
    );
};

export default Categories;