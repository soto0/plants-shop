export interface PlantsState {
    Plants: any,
    Pages: number[]
};

export enum PlantsTypes {
    GET_PLANTS = 'GET_PLANTS',
    GET_PAGES = 'GET_PAGES'
};

interface getPlants {
    type: PlantsTypes.GET_PLANTS,
    plants: []
};

interface getPages {
    type: PlantsTypes.GET_PAGES,
    pages: number[]
};

export type PlantsAction = getPlants | getPages;