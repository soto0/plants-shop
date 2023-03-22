import axios from 'axios';
import { Dispatch } from 'redux';
import { BasketAction, BasketTypes } from './../../../types/Basket';

export const getBasketToggle = (user: string) => {
    return async (dispatch: Dispatch<BasketAction>) => {
        const response = await axios.get('http://localhost:3001/Basket?user=' + user);
        dispatch({ type: BasketTypes.GET_BASKET__TOGGLE, basketToggle: response.data });
    };
};