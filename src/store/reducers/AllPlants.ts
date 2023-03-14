import { AllPlantsAction, AllPlantsState, AllPlantsTypes } from "../../types/AllPlants";

const initialState: AllPlantsState = {
    AllPlants: []
};

export const AllPlantsReducer = (state = initialState, action: AllPlantsAction): AllPlantsState => {
    switch (action.type) {
        case AllPlantsTypes.GET_ALL_PLANTS:
            return { ...state, AllPlants: action.allPlants }
        default:
            return state
    };
};