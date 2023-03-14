export interface AllPlantsState {
    AllPlants: []
};

export enum AllPlantsTypes {
    GET_ALL_PLANTS = 'GET_ALL_PLANTS'
};

interface getAllPlants {
    type: AllPlantsTypes.GET_ALL_PLANTS,
    allPlants: []
};

export type AllPlantsAction = getAllPlants;