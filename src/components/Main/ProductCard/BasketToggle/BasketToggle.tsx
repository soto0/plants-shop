import { FC } from 'react';
import s from './../ProductCard.module.css';
import { addProductToBasket, deleteProductFromBasket } from '../../../../api/BasketToggle';

interface BasketToggleProps {
    User: any,
    SetPromptActive: any,
    BasketToggleProduct: any,
    Id: number,
    Title: string,
    Price: number,
    GetBasketToggle: any,
    SKU: number
};

const BasketToggle: FC<BasketToggleProps> = (props: BasketToggleProps) => {
    let addToBasket = () => {
        if (!props.User.userName) {
            props.SetPromptActive(true);
        } else {
            if (!props.BasketToggleProduct[0] || props.BasketToggleProduct[0].productId !== props.Id) {
                addProductToBasket(props.Id, props.Title, props.Price, props.User.userName, 1, "S", props.SKU);
            } else {
                deleteProductFromBasket(props.BasketToggleProduct[0].id);
            };

            props.GetBasketToggle(props.User.userName);
        };
    };

    return (
        <svg className={s.product__menu_item} onClick={addToBasket} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.294 16.8745H8.24077C5.65655 16.8745 3.55412 14.7721 3.55412 12.1879V7.38404C3.55412 4.98174 2.35676 2.75812 0.351225 1.43578C-0.00894369 1.19832 -0.108379 0.71388 0.129078 0.353711C0.366535 -0.00649689 0.850939 -0.105971 1.21119 0.131564C2.35606 0.886427 3.28487 1.88203 3.94905 3.0283C4.09258 3.1891 5.24995 4.41583 7.14726 4.41583H16.142C18.596 4.36994 20.5168 6.83265 19.8752 9.20136L18.8397 13.3283C18.3159 15.4163 16.4466 16.8745 14.294 16.8745ZM4.91926 5.53676C5.04912 6.13669 5.11634 6.75528 5.11634 7.38404V12.1879C5.11634 13.9107 6.51796 15.3123 8.24077 15.3123H14.294C15.7291 15.3123 16.9752 14.3401 17.3245 12.9482L18.3599 8.8212C18.7412 7.41372 17.5997 5.95082 16.142 5.97804H7.14722C6.28913 5.97804 5.54224 5.79304 4.91926 5.53676ZM7.85021 19.0226C7.85021 18.4833 7.41307 18.0462 6.87383 18.0462C5.57828 18.0978 5.57942 19.9479 6.87383 19.9989C7.41307 19.9989 7.85021 19.5618 7.85021 19.0226ZM15.6222 19.0226C15.6222 18.4833 15.1851 18.0462 14.6459 18.0462C13.3503 18.0978 13.3514 19.9479 14.6459 19.9989C15.1851 19.9989 15.6222 19.5618 15.6222 19.0226ZM16.9231 8.32137C16.9231 7.88996 16.5734 7.54026 16.142 7.54026H7.45966C6.42329 7.5815 6.42407 9.06158 7.45966 9.10248H16.142C16.5734 9.10248 16.9231 8.75277 16.9231 8.32137Z" fill={props.BasketToggleProduct[0] ? '#46A358' : '#3D3D3D'} />
        </svg>
    );
};

export default BasketToggle;