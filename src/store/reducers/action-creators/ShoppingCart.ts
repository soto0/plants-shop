import axios from 'axios';
import { Dispatch } from 'redux';
import { ShoppingCartAction, ShoppingCartTypes } from './../../../types/ShoppingCart';

export const getShoppingCart = (user: string) => {
    return async (dispatch: Dispatch<ShoppingCartAction>) => {
        try {
            const response = await axios.get('http://localhost:3001/Basket?user=' + user);
            const totalPrice = response.data.reduce((product: any, price: any) =>  product = product + price.productPrice * price.productAmount , 0 );

            dispatch({ type: ShoppingCartTypes.GET_SHOPPING_CART_PRODUCTS, products: response.data, totalPrice: totalPrice  });
        } catch (error) {
            console.error(error);
        };
    };
};