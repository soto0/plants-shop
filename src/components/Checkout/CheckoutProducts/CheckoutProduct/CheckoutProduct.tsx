import { FC } from 'react';
import s from './../CheckoutProducts.module.css';
import ProductIcon from './../../../../assets/images/product.png';

interface CheckoutProductProps {
    ProductTitle: string,
    ProductPrice: number,
    ProductSKU: number,
    ProductCount: number,
};

const CheckoutProduct: FC<CheckoutProductProps> = (props: CheckoutProductProps) => {
    return (
        <div className={s.product}>
            <img src={ProductIcon} alt="product" className={s.product__icon} />
            <div className={s.product__text}>
                <p className={s.product__title}>{props.ProductTitle}</p>
                <p className={s.product__sku}>SKU: <span>{props.ProductSKU}</span></p>
            </div>
            <p className={s.product__count}>(x {props.ProductCount})</p>
            <p className={s.product__price}>${props.ProductPrice}.00</p>
        </div>
    );
};

export default CheckoutProduct;