import { PostsReducer } from './Posts';

import { combineReducers } from "redux";
import { PlantsReducer } from "./Plants";

export const rootReducer = combineReducers({
    Plants: PlantsReducer,
    Posts: PostsReducer
});

export type RootState = ReturnType<typeof rootReducer>