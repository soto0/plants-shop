import { FC, useState } from 'react';
import s from './Goods.module.css';
import { NavLink } from 'react-router-dom';
import ProductCard from './../ProductCard/ProductCard';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

interface GoodsProps {
    Plants: any,
    GetPlants: any,
}

const Goods: FC<GoodsProps> = (props: GoodsProps) => {
    const [selectorActive, setSelectorActive] = useState(false);
    const [sortValue, setSortValue] = useState<any>();
    const { LikesProduct } = useTypedSelector(state => state.Likes);
    const { BasketToggle } = useTypedSelector(state => state.Basket);

    let getAllPlants = () => {
        props.GetPlants(undefined, undefined, undefined, undefined, undefined);
    };

    let getNewArrivals = () => {
        props.GetPlants(true, undefined, undefined, undefined, undefined);
    };

    let getSale = () => {
        props.GetPlants(undefined, true, undefined, undefined, undefined);
    };

    let selectorToggle = () => {
        setSelectorActive(true);
    };

    let onClickSort = (event: any) => {
        setSortValue(event.target.innerText);
        setSelectorActive(false);

        switch (event.target.innerText) {
            case 'Default Sorting':
                return (
                    props.Plants.sort((a: any, b: any) => {
                        return a.id - b.id

                    })
                )
            case 'By price increase':
                return (
                    props.Plants.sort((a: any, b: any) => {
                        return a.price - b.price

                    })
                )
            case 'By price reduction':
                return (
                    props.Plants.sort((a: any, b: any) => {
                        return a.price - b.price

                    }).reverse()
                )
        };
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
                    props.Plants.map((plant: any) => {
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
                                SKU={plant.sku}
                                key={plant.id}
                                LikesProduct={LikesProduct.filter((like: any) => like.likesProductId === plant.id)}
                                BasketToggleProduct={BasketToggle.filter((basketProduct: any) => basketProduct.productId === plant.id)}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Goods;