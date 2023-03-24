import { PlantState, PlantAction, PlantTypes } from './../../types/Plant';

const initialState: PlantState = {
    SliderPlants: []
};

export const PlantReducer = (state = initialState, action: PlantAction): PlantState => {
    switch (action.type) {
        case PlantTypes.GET_SLIDER_PLANTS:
            return { ...state, SliderPlants: action.sliderPlants }
        default: 
            return state
    };
};