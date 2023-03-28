export interface CheckoutState {
    Countries: [],
    NumberCodes: []
};

export enum CheckoutTypes {
    GET_COUNTRIES = 'GET_COUNTRIES',
    GET_NUMBER_CODES = 'GET_NUMBER_CODES',
    CLEAR_SELECTORS = 'CLEAR_SELECTORS'
};

interface getCountries {
    type: CheckoutTypes.GET_COUNTRIES,
    countries: []
};

interface getNumberCodes {
    type: CheckoutTypes.GET_NUMBER_CODES,
    numberCodes: []
};

interface getCLearSelectors {
    type: CheckoutTypes.CLEAR_SELECTORS,
    countries: [],
    numberCodes: []
};

export type CheckoutAction = getCountries | getNumberCodes | getCLearSelectors;