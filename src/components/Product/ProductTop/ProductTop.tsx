import {FC, useState} from 'react';
import s from './ProductTop.module.css';
import ProductIcon from './../../../assets/images/product.png';
import ProductIcon2 from './../../../assets/images/product2.png';
import LikeToggle from '../../../helpers/LikeToggle';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import ProductPrompt from './ProductPrompt/ProductPrompt';
import { addProductToBasket } from '../../../api/BasketToggle';
import { useNavigate } from 'react-router-dom';
import QuantitySelector from '../../../helpers/QuantitySelector';

interface ProductTopProps {
    Plant: any,
    GetLargeIcon: any,
    LargeIcon: string,
    User: any,
    GetLikesProduct: any
};

const ProductTop: FC<ProductTopProps> = (props: ProductTopProps) => {
    const { LikesProduct } = useTypedSelector(state => state.Likes);
    const [ size, setSize ] = useState('S');
    const [ promptActive, setPromptActive] = useState<boolean>(false);
    const [ count, setCount ] = useState<number>(1);
    const navigate = useNavigate();

    const getSmallIcon = (e: any) => {
        props.GetLargeIcon(e.target.src);
    };

    const selectSize = (e: any) => {
        setSize(e.target.innerText);
    };

    const onClickBuy = () => {
        if (props.User.length === 0) {
            setPromptActive(true);
        } else {
            addProductToBasket(props.Plant.id, props.Plant.Title, props.Plant.Price, props.User.userName, count, size);
            navigate('/Shop-cart');
        };
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
                        <p className={size === 'S' ? s.product__size_block_active : s.product__size_block} onClick={selectSize}>S</p>
                        <p className={size === 'M' ? s.product__size_block_active : s.product__size_block} onClick={selectSize}>M</p>
                        <p className={size === 'L' ? s.product__size_block_active : s.product__size_block} onClick={selectSize}>L</p>
                        <p className={size === 'XL' ? s.product__size_block_active : s.product__size_block} onClick={selectSize}>XL</p>
                    </div>
                </div>
                <div className={s.product__buy}>
                    <div className={s.product__count_selector}>
                        <QuantitySelector SetCount={setCount} Count={count} />
                        <div className={s.product__buy_buttons}>
                            <button className="button product__btn" onClick={onClickBuy}>Buy NOW</button>
                            <div className={s.product__like}></div>
                            <LikeToggle 
                                User={props.User} 
                                SetPromptActive={setPromptActive} 
                                LikesProduct={LikesProduct} 
                                Id={props.Plant.id} 
                                GetLikesProduct={props.GetLikesProduct}
                                LikeTitle={"Product"} 
                            />
                        </div>
                    </div>
                </div>
                <div className={s.product__info}>
                    <p className={s.product__info_text}>SKU: <span>{props.Plant.sku}</span></p>
                    <p className={s.product__info_text}>Categories: <span>{props.Plant.category}</span></p>
                    <p className={s.product__info_text}>Tags: <span>{props.Plant.tags}</span></p>
                </div>
            </div>
            {promptActive ? <ProductPrompt /> : undefined}
        </div>
    );
};

export default ProductTop;