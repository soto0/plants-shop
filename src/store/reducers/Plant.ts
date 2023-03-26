import { PlantState, PlantAction, PlantTypes } from './../../types/Plant';
import PlantIcon from './../../assets/images/product.png';

const initialState: PlantState = {
    Plant: [],
    SliderPlants: [],
    LargeIcon: PlantIcon
};

export const PlantReducer = (state = initialState, action: PlantAction): PlantState => {
    switch (action.type) {
        case PlantTypes.GET_PLANT:
            return { ...state, Plant: action.plant }
        case PlantTypes.GET_SLIDER_PLANTS:
            return { ...state, SliderPlants: action.sliderPlants }
        case PlantTypes.GET_LARGE_ICON:
            return { ...state, LargeIcon: action.largeIcon }
        default: 
            return state
    };
};