
import { combineReducers } from "redux";
import { PlantsReducer } from "./Plants";

export const rootReducer = combineReducers({
    Plants: PlantsReducer,
});

export type RootState = ReturnType<typeof rootReducer>