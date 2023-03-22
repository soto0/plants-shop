export interface BasketState {
    BasketToggle: any
};

export enum BasketTypes {
    GET_BASKET__TOGGLE = 'GET_BASKET_TOGGLE'
};

interface getBasketToggle {
    type: BasketTypes.GET_BASKET__TOGGLE,
    basketToggle: []
};

export type BasketAction = getBasketToggle;