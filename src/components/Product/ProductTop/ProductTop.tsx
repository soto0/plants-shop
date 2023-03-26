import {FC} from 'react';
import s from './ProductTop.module.css';
import ProductIcon from './../../../assets/images/product.png';
import ProductIcon2 from './../../../assets/images/product2.png';

interface ProductTopProps {
    Plant: any,
    GetLargeIcon: any,
    LargeIcon: string
};

const ProductTop: FC<ProductTopProps> = (props: ProductTopProps) => {
    const getSmallIcon = (e: any) => {
        props.GetLargeIcon(e.target.src);
    };

    return (
        <div className={s.product__top}>
            <div className={s.product__left}>
                <div className={s.product__small_icons}>
                    <img src={ProductIcon} alt="small__icon" className={s.product__small_icon} onClick={getSmallIcon} />
                    <img src={ProductIcon2} alt="small__icon" className={s.product__small_icon} onClick={getSmallIcon} />
                    <img src={ProductIcon} alt="small__icon" className={s.product__small_icon} onClick={getSmallIcon} />
                    <img src={ProductIcon2} alt="small__icon"  className={s.product__small_icon} onClick={getSmallIcon} />
                </div>
                <img src={props.LargeIcon} alt="large__icon" className={s.product__large_icon} />
            </div>
            <div className={s.product__right}>
                <h2 className={s.product__title}>{props.Plant.title}</h2>
                <div className={s.product__statistic}>
                    <p className={s.product__price}>{props.Plant.price + '.00$'}</p>
                </div>
                <div className={s.product__description}>
                    <h5 className={s.product__description_title}>Short Description:</h5>
                    <p className={s.product__description}>{props.Plant.shortDescription}</p>
                </div>
                <div className={s.product__size}>
                    <h5 className={s.product__size_title}>Size:</h5>
                    <div className={s.product__size_blocks}>
                        <p className={s.product__size_block}>S</p>
                        <p className={s.product__size_block}>M</p>
                        <p className={s.product__size_block}>L</p>
                        <p className={s.product__size_block}>XL</p>
                    </div>
                </div>
                <div className={s.product__buy}>
                    <div className={s.product__count_selector}>
                        <span className={s.product__count_btn}>-</span>
                        <div className={s.product__count}>1</div>
                        <span className={s.product__count_btn}>+</span>
                        <div className={s.product__buy_buttons}>
                            <button className="button product__btn">Buy NOW</button>
                            <div className={s.product__like}></div>
                        </div>
                    </div>
                </div>
                <div className={s.product__info}>
                    <p className={s.product__info_text}>SKU: <span>{props.Plant.sku}</span></p>
                    <p className={s.product__info_text}>Categories: <span>{props.Plant.category}</span></p>
                    <p className={s.product__info_text}>Tags: <span>{props.Plant.tags}</span></p>
                </div>
            </div>
        </div>
    );
};

export default ProductTop;