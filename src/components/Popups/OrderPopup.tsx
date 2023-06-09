import { FC } from 'react';
import s from './Popups.module.css';
import Close from './../../assets/images/close.svg';
import OrderIcon from './../../assets/images/order.svg';
import CheckoutProduct from '../Checkout/CheckoutProducts/CheckoutProduct/CheckoutProduct';

interface OrderPopupProps {
    OrderProducts: [] | undefined,
    OrderProductsTotalPrice: number | undefined,
    SetOrderPopupActive: any,
    OrderPopupActive: boolean
};

const OrderPopup: FC<OrderPopupProps> = (props: OrderPopupProps) => {
    return (
        <>
            {
                props.OrderPopupActive ?
                    <div className={s.order__popup}>
                        <div className={s.order__popup_top}>
                            <img src={Close} alt="close" className={s.close} onClick={() => { props.SetOrderPopupActive(false) }} />
                            <div className={s.order__icon_block}>
                                <img src={OrderIcon} alt="order__icon" className={s.order__icon} />
                                <p className={s.order__title}>Your order has been received</p>
                            </div>
                        </div>
                        <div className={s.order__popup_center}>
                            <div className={s.order__center_block}>
                                <p className={s.order__block_title}>Total</p>
                                <p className={s.order__block_subtitle}>{props.OrderProductsTotalPrice}.00</p>
                            </div>
                        </div>
                        <div className={s.order__popup_bottom}>
                            <h2 className={s.order__title}>Order Details</h2>
                            <div className={s.order__products_top}>
                                <p className={s.order__products_title}>Products</p>
                                <p className={s.order__products_title}>Qty</p>
                                <p className={s.order__products_title}>Subtotal</p>
                            </div>
                            <div className={s.order__products}>
                                {
                                    props.OrderProducts?.map((product: any) => {
                                        return (
                                            <CheckoutProduct
                                                ProductTitle={product.productTitle}
                                                ProductPrice={product.productPrice * product.productAmount}
                                                ProductCount={product.productAmount}
                                                ProductSKU={product.productSKU}
                                            />
                                        )
                                    })
                                }
                            </div>
                            <div className={s.order__total_block}>
                                <h2 className={s.order__total_title}>Total</h2>
                                <p className={s.order__total}>${props.OrderProductsTotalPrice}.00</p>
                            </div>
                        </div>
                    </div> :
                    undefined
            }
        </>
    );
};

export default OrderPopup;