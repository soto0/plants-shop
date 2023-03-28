import { CheckoutState, CheckoutAction, CheckoutTypes } from './../../types/Checkout';

const initialState: CheckoutState = {
    Countries: [],
    NumberCodes: []
};

export const CheckoutReducer = (state = initialState, action: CheckoutAction) => {
    switch (action.type) {
        case CheckoutTypes.CLEAR_SELECTORS: 
            return { Countries: action.countries , NumberCodes: action.numberCodes }
        case CheckoutTypes.GET_COUNTRIES:
            return { ...state, Countries: action.countries }
        case CheckoutTypes.GET_NUMBER_CODES:
            return { ...state, NumberCodes: action.numberCodes }
        default:
            return state
    };
};