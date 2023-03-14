import { combineReducers } from "redux";
import { AllPlantsReducer } from "./AllPlants";

export const rootReducer = combineReducers({
    AllPlants: AllPlantsReducer
});

export type RootState = ReturnType<typeof rootReducer>