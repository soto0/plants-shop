import { FC } from 'react';
import { useTypedSelector } from './../../../hooks/useTypedSelector';
import OfferSlider from './../../../components/OfferSlider/OfferSlider';
import s from './../ShoppingCart.module.css';

const ShoppingCartSlider: FC = () => {
    const { LikesProduct } = useTypedSelector(state => state.Likes);
    const { BasketToggle } = useTypedSelector(state => state.Basket);
    const { SliderPlants } = useTypedSelector(state => state.Plant);

    return (
        <div className={s.interested__slider}>
            <h3 className={s.interested__title}>You may be interested in</h3>
            <OfferSlider
                LikesProduct={LikesProduct}
                BasketToggle={BasketToggle}
                FilterSlider={SliderPlants}
            />
        </div>
    );
};

export default ShoppingCartSlider;