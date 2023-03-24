export interface PlantState {
    Plant: any,
    SliderPlants: []
};

export enum PlantTypes {
    GET_PLANT = 'GET_PLANT',
    GET_SLIDER_PLANTS = 'GET_SLIDER_PLANTS'
};

interface getPlant {
    type: PlantTypes.GET_PLANT,
    plant: []
};

interface getSliderPlants {
    type: PlantTypes.GET_SLIDER_PLANTS,
    sliderPlants: []
};

export type PlantAction = getPlant | getSliderPlants;