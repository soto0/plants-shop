import { FC, useEffect, useState } from 'react';
import s from './Goods.module.css';
import { NavLink } from 'react-router-dom';
import ProductCard from './../ProductCard/ProductCard';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const Goods: FC = () => {
    const [ selectorActive, setSelectorActive]  = useState(false);
    const [ sortValue, setSortValue ] = useState<any>();
    const { Plants } = useTypedSelector(state => state.Plants);
    const url = window.location.pathname;
    const { getPlants } = useActions();

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

    let selectorToggle = () => {
        setSelectorActive(true);
    };

    let onClickSort = (event: any) => {
        setSortValue(event.target.innerText);
        setSelectorActive(false);
        
        if (event.target.innerText === 'Default Sorting') {
            Plants.sort((a: any, b: any) => {
                return a.id - b.id
                        
            });
        } else if (event.target.innerText === 'By price increase') {
            Plants.sort((a: any, b: any) => {
                return a.price - b.price
                        
            });
        } else if (event.target.innerText === 'By price reduction') {
            Plants.sort((a: any, b: any) => {
                return a.price - b.price
                        
            }).reverse();
        } 
    };

    return (
        <div className={s.goods}>
            <div className={s.goods__menu}>
                <NavLink to='' onClick={getAllPlants} className={({ isActive }) => isActive ? s.goods__menu_item_active : s.goods__menu_item}>All Plants</NavLink>
                <NavLink to='New-Arrivals' onClick={getNewArrivals} className={({ isActive }) => isActive ? s.goods__menu_item_active : s.goods__menu_item}>New Arrivals</NavLink>
                <NavLink to='Sale' onClick={getSale} className={({ isActive }) => isActive ? s.goods__menu_item_active : s.goods__menu_item}>Sale</NavLink>
                <div className={s.sort__block}>
                    <p className={s.sort__text}>Short by:</p>
                    <p className={s.sort__selector} onClick={selectorToggle}>{sortValue ? sortValue : 'Default Sorting'}</p>
                    {
                        selectorActive ?
                            <div className={s.selector}>
                                <p className={s.selector__item} onClick={onClickSort}>Default Sorting</p>
                                <p className={s.selector__item} onClick={onClickSort}>By price increase</p>
                                <p className={s.selector__item} onClick={onClickSort}>By price reduction</p>
                            </div> : undefined
                    }
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
                                OldPrice={plant.oldPrice}
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