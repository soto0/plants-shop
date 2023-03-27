import { ShoppingCartState, ShoppingCartAction, ShoppingCartTypes } from './../../types/ShoppingCart';

const initialState: ShoppingCartState = {
    Products: [],
    TotalPrice: 0
};

export const ShoppingCartReducer = (state = initialState, action: ShoppingCartAction): ShoppingCartState => {
    switch (action.type) {
        case ShoppingCartTypes.GET_SHOPPING_CART_PRODUCTS:
            return { ...state, Products: action.products, TotalPrice: action.totalPrice }
        default: 
            return state
    };
};