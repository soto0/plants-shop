import {FC} from 'react';
import s from './ProductCenter.module.css';

interface ProductCenterProps  {
    PlantDescription: string
};

const ProductCenter: FC<ProductCenterProps> = (props: ProductCenterProps) => {
    return (
        <div className={s.product__center}>
            <h3 className={s.product__title}>Product Description</h3>
            <p className={s.product__description_text}>{props.PlantDescription}</p>
        </div>
    );
};

export default ProductCenter;