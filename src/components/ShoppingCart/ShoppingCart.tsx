import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import s from './ShoppingCart.module.css';
import Delete from './../../assets/images/delete.svg';
import ProductIcon from './../../assets/images/product.png';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { deleteProductFromBasket } from '../../api/BasketToggle';
import ShoppingCartQuantitySelector from './ShoppingCartQuantitySelector/ShoppingCartQuantitySelector';
import { useActions } from '../../hooks/useActions';

interface ShoppingCartProps {
    User: any,
    GetShoppingCart: any
};

const ShoppingCart: FC<ShoppingCartProps> = (props: ShoppingCartProps) => {
    const { Products, TotalPrice } = useTypedSelector(state => state.ShoppingCart);
    const { getBasketToggle } = useActions();
    const navigate = useNavigate();

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
                        Products.length === 0 ?
                            <h2 className={s.prompt}>No products in shopping cart</h2> :
                            Products.map((product: any) => {
                                return (
                                    <div className={s.shoppingCart__product} key={product.id}>
                                        <img src={ProductIcon} alt="product" className={s.shoppingCart__product_icon} />
                                        <div className={s.shoppingCart__product_text}>
                                            <p className={s.shoppingCart__product_title}>{product.productTitle}</p>
                                            <p className={s.shoppingCart__product_sku}>SKU: <span>{product.productSKU}</span></p>
                                        </div>
                                        <p className={s.shoppingCart__product_price}>${product.productPrice}.00</p>
                                        <ShoppingCartQuantitySelector
                                            ProductId={product.productId}
                                            ProductTitle={product.productTitle}
                                            ProductPrice={product.productPrice}
                                            User={props.User.userName}
                                            Count={product.productAmount}
                                            ProductSize={product.productSize}
                                            ProductSKU={product.productSKU}
                                            Id={product.id}
                                            GetShoppingCart={props.GetShoppingCart}
                                            key={product.id}
                                        />
                                        <p className={s.shoppingCart__product_total}>{"$" + product.productPrice * product.productAmount + ".00"}</p>
                                        <img src={Delete} alt="delete" className={s.shoppingCart__product_delete} onClick={() => {
                                            deleteProductFromBasket(product.id); props.GetShoppingCart(props.User.userName); getBasketToggle(props.User.userName);;
                                        }}
                                        />
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
                    <p className={s.shoppingCart__total_price}>${TotalPrice}.00</p>
                </div>
                <div className={s.shoppingCart__buttons}>
                    <button className="button proceed__btn" disabled={TotalPrice === 0} onClick={() => { navigate('/Checkout') }}>Proceed To Checkout</button>
                    <Link to='/' className={s.shoppingCart__shopping}>Continue Shopping</Link>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;