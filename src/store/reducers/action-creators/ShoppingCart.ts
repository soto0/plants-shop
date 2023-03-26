import axios from 'axios';
import { Dispatch } from 'redux';
import { ShoppingCartAction, ShoppingCartTypes } from './../../../types/ShoppingCart';

export const getShoppingCart = (user: string) => {
    return async (dispatch: Dispatch<ShoppingCartAction>) => {
        try {
            const response = await axios.get('http://localhost:3001/Basket?user=' + user);
            dispatch({ type: ShoppingCartTypes.GET_SHOPPING_CART_PRODUCTS, products: response.data });
        } catch (error) {
            console.error(error);
        };
    };
};