import { FC } from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import OfferSlider from '../../OfferSlider/OfferSlider';
import s from './ProductBottom.module.css';

interface ProductBottomProps {
    SliderPlants: [],
    PlantTitle: string
};

const ProductBottom: FC<ProductBottomProps> = (props: ProductBottomProps) => {
    const { LikesProduct } = useTypedSelector(state => state.Likes);
    const { BasketToggle } = useTypedSelector(state => state.Basket);

    const FilterSlider = props.SliderPlants.filter((plant: any) => plant.title !== props.PlantTitle);
    
    return (
        <div className={s.product__bottom}>
            <h3 className={s.product__title}>Releted Products</h3>
            <OfferSlider 
                LikesProduct={LikesProduct} 
                BasketToggle={BasketToggle} 
                FilterSlider={FilterSlider}
            />
        </div>
    );
};

export default ProductBottom;