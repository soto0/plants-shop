export interface PlantState {
    SliderPlants: []
};

export enum PlantTypes {
    GET_SLIDER_PLANTS = 'GET_SLIDER_PLANTS'
};

interface getSliderPlants {
    type: PlantTypes.GET_SLIDER_PLANTS,
    sliderPlants: []
};

export type PlantAction = getSliderPlants;