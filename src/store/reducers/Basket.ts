import { BasketState, BasketAction, BasketTypes } from './../../types/Basket';

const initialState: BasketState = {
    BasketToggle: []
};

export const BasketReducer = (state = initialState, action: BasketAction): BasketState => {
    switch (action.type) {
        case BasketTypes.GET_BASKET__TOGGLE:
            return { ...state, BasketToggle: action.basketToggle }
        default: 
            return state
    };
};