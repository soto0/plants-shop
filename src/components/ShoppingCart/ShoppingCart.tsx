import { FC, useState } from 'react';
import QuantitySelector from '../../helpers/QuantitySelector';
import s from './ShoppingCart.module.css';
import ProductIcon from './../../assets/images/product.png';
import Delete from './../../assets/images/delete.svg';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const ShoppingCart: FC = () => {
    const { Products } = useTypedSelector(state => state.ShoppingCart);
    const [ count, setCount] = useState<number>(1);

    return (
        <div className={s.shoppingCart__block}>
            <div className={s.shoppingCart__left}>
                <div className={s.shoppingCart__top}>
                    <p className={s.title}>Products</p>
                    <p className={s.title}>Price</p>
                    <p className={s.title}>Quantity</p>
                    <p className={s.title}>Total</p>
                </div>
                <div className={s.shoppingCart__products}>
                    {
                        Products.map((product: any) => {
                            return (
                                <div className={s.shoppingCart__product}>
                                    <img src={ProductIcon} alt="product" className={s.shoppingCart__product_icon} />
                                    <div className={s.shoppingCart__product_text}>
                                        <p className={s.shoppingCart__product_title}>{product.productTitle}</p>
                                        <p className={s.shoppingCart__product_sku}>SKU: <span>{product.productSKU}</span></p>
                                    </div>
                                    <p className={s.shoppingCart__product_price}>${product.productPrice}.00</p>
                                    <QuantitySelector SetCount={setCount} Count={count} />
                                    <p className={s.shoppingCart__product_total}>$238.00</p>
                                    <img src={Delete} alt="delete" className={s.shoppingCart__product_delete} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={s.shoppingCart__right}>
                <p className={s.shoppingCart__right_title}>Cart Totals</p>
                <div className={s.shoppingCart__total}>
                    <p className={s.shoppingCart__total_title}>Total</p>
                    <p className={s.shoppingCart__total_price}>$2,699.00</p>
                </div>
                <div className={s.shoppingCart__buttons}>
                    <button className="button proceed__btn">Proceed To Checkout</button>
                    <Link to='' className={s.shoppingCart__shopping}>Continue Shopping</Link>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;