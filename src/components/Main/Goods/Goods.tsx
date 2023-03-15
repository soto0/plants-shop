import { FC, useEffect, useState } from 'react';
import s from './Goods.module.css';
import { NavLink } from 'react-router-dom';
import ProductCard from './../ProductCard/ProductCard';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const Goods: FC = () => {
    const { getPlants } = useActions();
    const { Plants } = useTypedSelector(state => state.Plants);
    const url = window.location.pathname;

    useEffect(() => {
        const checkUrl = () => {
            switch (url) {
                case '/':
                    return getPlants();
                case '/New-Arrivals':
                    return getPlants(true, undefined);
                case '/Sale':
                    return getPlants(undefined, true);
                default:
                    return undefined
            }
        };

        checkUrl();
    }, [url]);

    let getAllPlants = () => {
        getPlants();
    };

    let getNewArrivals = () => {
        getPlants(true, undefined);
    };

    let getSale = () => {
        getPlants(undefined, true);
    };

    return (
        <div className={s.goods}>
            <div className={s.goods__menu}>
                <NavLink to='' onClick={getAllPlants} className={({ isActive }) => isActive ? s.goods__menu_item_active : s.goods__menu_item}>All Plants</NavLink>
                <NavLink to='New-Arrivals' onClick={getNewArrivals} className={({ isActive }) => isActive ? s.goods__menu_item_active : s.goods__menu_item}>New Arrivals</NavLink>
                <NavLink to='Sale' onClick={getSale} className={({ isActive }) => isActive ? s.goods__menu_item_active : s.goods__menu_item}>Sale</NavLink>
                <div className={s.sort__block}>
                    <p className={s.sort__text}>Short by:</p>
                    <p className={s.sort__selector}>Default Sorting</p>
                </div>
            </div>
            <div className={s.products}>
                {
                    Plants.map((plant: any) => {
                        return (
                            <ProductCard
                                Category={plant.category}
                                Id={plant.id}
                                New={plant.new}
                                Price={plant.price}
                                SaleInterest={plant.saleInterest}
                                Sale={plant.sale}
                                SalePrice={plant.salePrice}
                                Size={plant.size}
                                Title={plant.title}
                                key={plant.id}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Goods;