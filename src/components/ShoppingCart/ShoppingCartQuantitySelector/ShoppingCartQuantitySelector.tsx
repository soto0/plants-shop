import { FC } from 'react';
import { ToggleQuantity } from '../../../api/QuantityToggle';

interface ShoppingCartQuantitySelector {
    ProductId: number,
    ProductTitle: string,
    ProductPrice: number,
    User: string,
    Count: number,
    ProductSize: string,
    ProductSKU: number,
    Id: number,
    GetShoppingCart: any
}

const ShoppingCartQuantitySelector: FC<ShoppingCartQuantitySelector> = (props: ShoppingCartQuantitySelector) => {
    const deleteCount = () => {
        ToggleQuantity(
            props.ProductId, 
            props.ProductTitle, 
            props.ProductPrice, 
            props.User, 
            props.Count - 1, 
            props.ProductSize, 
            props.ProductSKU, 
            props.Id
        );
        
        props.GetShoppingCart(props.User);
    };

    const addCount = () => {
        ToggleQuantity(
            props.ProductId, 
            props.ProductTitle, 
            props.ProductPrice, 
            props.User, 
            props.Count + 1, 
            props.ProductSize, 
            props.ProductSKU, 
            props.Id
        );

        props.GetShoppingCart(props.User);
    };

    return (
        <div className="count__block">
            <button type="button" disabled={props.Count === 1 ? true : false} className="count_btn" onClick={deleteCount}>-</button>
            <div className="count">{props.Count}</div>
            <button type="button" disabled={props.Count === 4 ? true : false} className="count_btn" onClick={addCount}>+</button>
        </div>
    );
};

export default ShoppingCartQuantitySelector;