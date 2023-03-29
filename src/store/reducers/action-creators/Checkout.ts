import { CheckoutAction, CheckoutTypes } from './../../../types/Checkout';
import { Dispatch } from 'redux';
import axios from 'axios';

export const getCountries = () => {
    return async (dispatch: Dispatch<CheckoutAction>) => {
        try {
            const response = await axios.get('https://restcountries.com/v3.1/all');
            dispatch({ type: CheckoutTypes.GET_COUNTRIES, countries: response.data });
        } catch (error) {
            console.error(error);
        };
    };
};

export const getNumberCodes = () => {
    return async (dispatch: Dispatch<CheckoutAction>) => {
        try {
            const response = await axios.get('http://localhost:3001/NumberCodes');
            dispatch({ type: CheckoutTypes.GET_NUMBER_CODES, numberCodes: response.data });
        } catch (error) {
            console.error(error);
        };
    };
};

export const ClearSelectors = () => {
    return (dispatch: Dispatch<CheckoutAction>) => {
        dispatch({ type: CheckoutTypes.CLEAR_SELECTORS, countries: [], numberCodes: [] });
    };
};