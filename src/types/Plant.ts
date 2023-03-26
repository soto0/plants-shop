export interface PlantState {
    Plant: any,
    SliderPlants: [],
    LargeIcon: string
};

export enum PlantTypes {
    GET_PLANT = 'GET_PLANT',
    GET_SLIDER_PLANTS = 'GET_SLIDER_PLANTS',
    GET_LARGE_ICON = 'GET_LARGE_ICON'
};

interface getPlant {
    type: PlantTypes.GET_PLANT,
    plant: []
};

interface getSliderPlants {
    type: PlantTypes.GET_SLIDER_PLANTS,
    sliderPlants: []
};

interface getLargeIcon {
    type: PlantTypes.GET_LARGE_ICON,
    largeIcon: string
};

export type PlantAction = getPlant | getSliderPlants | getLargeIcon;