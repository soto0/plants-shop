import { LikesState, LikesAction, LikesTypes } from './../../types/Likes';

const initialState: LikesState = {
    LikesProduct: [],
};

export const LikesReducer = (state = initialState, action: LikesAction) => {
    switch (action.type) {
        case LikesTypes.GET_LIKES_PRODUCT:
            return { ...state, LikesProduct: action.likesProduct }
        default: 
            return state
    };
};