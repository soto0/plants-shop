export interface NewArrivalsState {
    NewArrivals: []
};

export enum NewArrivalsTypes {
    GET_NEW_ARRIVALS = 'GET_NEW_ARRIVALS'
};

interface getNewArrivals {
    type: NewArrivalsTypes.GET_NEW_ARRIVALS,
    newArrivals: []
};

export type NewArrivalsAction = getNewArrivals;