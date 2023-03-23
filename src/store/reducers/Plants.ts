import { PlantsAction, PlantsState, PlantsTypes } from "../../types/Plants";

const initialState: PlantsState = {
    Plants: [],
    Pages: []
};

export const PlantsReducer = (state = initialState, action: PlantsAction): PlantsState => {
    switch (action.type) {
        case PlantsTypes.GET_PLANTS:
            return { ...state, Plants: action.plants }
        case PlantsTypes.GET_PAGES:
            return { ...state, Pages: action.pages }
        default:
            return state
    };
};

