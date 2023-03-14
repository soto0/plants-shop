import { FC } from 'react';
import s from './Goods.module.css';
import { NavLink } from 'react-router-dom';
import ProductCard from './../ProductCard/ProductCard';

const Goods: FC = () => {
    return (
        <div className={s.goods}>
            <div className={s.goods__menu}>
                <NavLink to='All-Plants' className={({ isActive }) => isActive ? s.goods__menu_item_active : s.goods__menu_item}>All Plants</NavLink>
                <NavLink to='New-Arrivals' className={({ isActive }) => isActive ? s.goods__menu_item_active : s.goods__menu_item}>New Arrivals</NavLink>
                <NavLink to='Sale' className={({ isActive }) => isActive ? s.goods__menu_item_active : s.goods__menu_item}>Sale</NavLink>
                <div className={s.sort__block}>
                    <p className={s.sort__text}>Short by:</p>
                    <p className={s.sort__selector}>Default Sorting</p>
                </div>
            </div>
            <div className={s.products}>
                <ProductCard />
            </div>
        </div>
    );
};

export default Goods;