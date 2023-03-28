import {FC} from 'react';
import CheckoutProduct from './CheckoutProduct/CheckoutProduct';
import s from './CheckoutProducts.module.css';

interface CheckoutProducts {
    User: any,
    OrderCreate: boolean,
    SetOrderCreate: any,
    Products: any,
    TotalPrice: number
};

const CheckoutProducts: FC<CheckoutProducts> = (props: CheckoutProducts) => {
    return (
        <div className={s.products}>
            <div className={s.products__top}>
                <p className={s.title}>Products</p>
                <p className={s.title}>Subtotal</p>
            </div>
            <div className={s.products__bottom}>
                {
                    props.Products.map((product: any) => {
                        return (
                            <CheckoutProduct 
                                ProductTitle={product.productTitle}
                                ProductPrice={product.productPrice * product.productAmount}
                                ProductSKU={product.productSKU}
                                ProductCount={product.productAmount}
                            />
                        )
                    })
                }
                <div className={s.product__total}>
                    <p className={s.product__total_title}>Total</p>
                    <p className={s.product__total_price}>${props.TotalPrice}.00</p>
                </div>
            </div>
        </div>
    );
};

export default CheckoutProducts;