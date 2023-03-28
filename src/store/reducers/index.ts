import { CheckoutReducer } from './Checkout';
import { ShoppingCartReducer } from './ShoppingCart';
import { BasketReducer } from './Basket';
import { LikesReducer } from './Likes';
import { combineReducers } from "redux";
import { LoginReducer } from './Login';
import { PostsReducer } from './Posts';
import { PlantsReducer } from "./Plants";
import { PlantReducer } from './Plant';

export const rootReducer = combineReducers({
    Plants: PlantsReducer,
    Posts: PostsReducer,
    Login: LoginReducer,
    Likes: LikesReducer,
    Basket: BasketReducer,
    Plant: PlantReducer,
    ShoppingCart: ShoppingCartReducer,
    Checkout: CheckoutReducer
});

export type RootState = ReturnType<typeof rootReducer>