import { LikesReducer } from './Likes';
import { combineReducers } from "redux";
import { LoginReducer } from './Login';
import { PostsReducer } from './Posts';
import { PlantsReducer } from "./Plants";

export const rootReducer = combineReducers({
    Plants: PlantsReducer,
    Posts: PostsReducer,
    Login: LoginReducer,
    Likes: LikesReducer
});

export type RootState = ReturnType<typeof rootReducer>