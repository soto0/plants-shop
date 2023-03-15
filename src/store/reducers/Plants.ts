import { PlantsAction, PlantsState, PlantsTypes } from "../../types/Plants";

const initialState: PlantsState = {
    Plants: []
};

export const PlantsReducer = (state = initialState, action: PlantsAction): PlantsState => {
    switch (action.type) {
        case PlantsTypes.GET_PLANTS:
            return { ...state, Plants: action.plants }
        default:
            return state
    };
};

