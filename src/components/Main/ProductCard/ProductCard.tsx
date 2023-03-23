import { FC, useEffect, useState } from 'react';
import s from './ProductCard.module.css';
import Product from './../../../assets/images/product.png';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useActions } from '../../../hooks/useActions';
import Prompt from './Prompt/Prompt';
import LikeToggle from './LikeToggle/LikeToggle';
import BasketToggle from './BasketToggle/BasketToggle';

interface ProductCardProps {
    Category: string,
    Id: number,
    New: boolean,
    Price: number,
    Sale: boolean,
    SaleInterest: number,
    OldPrice: number,
    Size: string,
    Title: string,
    LikesProduct: any,
    BasketToggleProduct: any,
};

const ProductCard: FC<ProductCardProps> = (props: ProductCardProps) => {
    const [promptActive, setPromptActive] = useState<boolean>(false);
    const { getLikesProduct, getBasketToggle } = useActions();
    const { User } = useTypedSelector(state => state.Login);

    useEffect(() => {
        if (User) {
            getLikesProduct(User.userName);
        }
    }, [User]);

    return (
        <div className={s.product}>
            <div className={s.product__top}>
                {props.SaleInterest !== 0 ? <p className={s.sale}>{props.Sale}% OFF</p> : undefined}
                <img src={Product} alt="product" className={s.product__icon} />
                <div className={s.product__menu}>
                    <BasketToggle 
                        User={User} 
                        SetPromptActive={setPromptActive} 
                        BasketToggleProduct={props.BasketToggleProduct} 
                        Id={props.Id} Title={props.Title} 
                        Price={props.Price} 
                        GetBasketToggle={getBasketToggle}  
                    />
                    <LikeToggle 
                        User={User} 
                        SetPromptActive={setPromptActive} 
                        LikesProduct={props.LikesProduct} 
                        Id={props.Id} 
                        GetLikesProduct={getLikesProduct} 
                    />
                    <Link to={'Product/' + props.Id}>
                        <svg className={s.product__menu_item} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.5656 16.0023C10.5704 19.1859 4.98549 18.3049 2.02729 14.6537C-0.827886 11.1285 -0.64932 6.04315 2.44811 2.82459C5.64856 -0.500733 10.6802 -0.94465 14.3277 1.78316C15.6345 2.76028 16.6104 4.00338 17.246 5.50808C17.8853 7.02152 18.0795 8.59614 17.8578 10.2201C17.6368 11.8366 16.9918 13.2769 15.9423 14.6212C16.0272 14.6768 16.1178 14.7167 16.1827 14.7816C17.3365 15.9305 18.4859 17.0836 19.6397 18.2325C19.9132 18.5047 20.0493 18.8219 19.9682 19.204C19.8071 19.9644 18.9018 20.2579 18.3211 19.7359C18.0489 19.4918 17.7985 19.2227 17.54 18.9642C16.5923 18.0171 15.6451 17.0693 14.6973 16.1221C14.658 16.0847 14.6168 16.0497 14.5656 16.0023ZM15.9529 8.98637C15.9629 5.12659 12.8468 2.00606 8.97825 2.00044C5.12035 1.99482 2.00669 5.09038 1.98983 8.94766C1.97297 12.8168 5.08289 15.9461 8.96326 15.9642C12.8055 15.9823 15.9429 12.8499 15.9529 8.98637Z" fill="#3D3D3D" />
                        </svg>
                    </Link>
                </div>
            </div>
            <div className={s.product__bottom}>
                <p className={s.product__title}>{props.Title}</p>
                <div className={s.price__block}>
                    <p className={s.product__price}>${props.Price + '.00'}</p>
                    {props.OldPrice ? <p className={props.OldPrice ? s.product__price_old : s.product__sale_price}>$ {props.OldPrice + '.00'}</p> : undefined}
                </div>
            </div>
            {User?.length === 0 && promptActive ? <Prompt /> : undefined}
        </div>
    );
};

export default ProductCard;