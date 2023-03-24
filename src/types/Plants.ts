export interface PlantsState {
    Plants: any,
};

export enum PlantsTypes {
    GET_PLANTS = 'GET_PLANTS',
};

interface getPlants {
    type: PlantsTypes.GET_PLANTS,
    plants: []
};

export type PlantsAction = getPlants;