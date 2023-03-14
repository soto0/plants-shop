import { FC, useEffect } from 'react';
import s from './Goods.module.css';
import { NavLink } from 'react-router-dom';
import ProductCard from './../ProductCard/ProductCard';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const Goods: FC = () => {
    const { getAllPlants } = useActions();
    const { AllPlants } = useTypedSelector(state => state.AllPlants);

    useEffect(() => {
        getAllPlants();
    }, []);

    return (
        <div className={s.goods}>
            <div className={s.goods__menu}>
                <NavLink to='' className={({ isActive }) => isActive ? s.goods__menu_item_active : s.goods__menu_item}>All Plants</NavLink>
                <NavLink to='New-Arrivals' className={({ isActive }) => isActive ? s.goods__menu_item_active : s.goods__menu_item}>New Arrivals</NavLink>
                <NavLink to='Sale' className={({ isActive }) => isActive ? s.goods__menu_item_active : s.goods__menu_item}>Sale</NavLink>
                <div className={s.sort__block}>
                    <p className={s.sort__text}>Short by:</p>
                    <p className={s.sort__selector}>Default Sorting</p>
                </div>
            </div>
            <div className={s.products}>
                {
                    AllPlants.map((plant: any) => {
                        return (
                            <ProductCard 
                                Category={plant.category} 
                                Id={plant.id} 
                                New={plant.new} 
                                Price={plant.price} 
                                Sale={plant.sale} 
                                SalePrice={plant.salePrice} 
                                Size={plant.size} 
                                Title={plant.title} 
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Goods;