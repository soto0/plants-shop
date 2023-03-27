export interface ShoppingCartState {
    Products: any,
    TotalPrice: number
};

export enum ShoppingCartTypes {
    GET_SHOPPING_CART_PRODUCTS = 'GET_SHOPPING_CART_PRODUCTS',
};

interface getShoppingCartProducts {
    type: ShoppingCartTypes.GET_SHOPPING_CART_PRODUCTS,
    products: [],
    totalPrice: number
};

export type ShoppingCartAction = getShoppingCartProducts;