export interface ShoppingCartState {
    Products: any
};

export enum ShoppingCartTypes {
    GET_SHOPPING_CART_PRODUCTS = 'GET_SHOPPING_CART_PRODUCTS'
};

interface getShoppingCartProducts {
    type: ShoppingCartTypes.GET_SHOPPING_CART_PRODUCTS,
    products: []
};

export type ShoppingCartAction = getShoppingCartProducts;