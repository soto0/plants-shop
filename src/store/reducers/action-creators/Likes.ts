import { LikesAction, LikesTypes } from './../../../types/Likes';
import { Dispatch } from "redux"
import axios from 'axios';

export const getLikesProduct = (user: string) => {
    return async (dispatch: Dispatch<LikesAction>) => {
        try {
            const response = await axios.get('http://localhost:3001/Likes?user=' + user);
            dispatch({ type: LikesTypes.GET_LIKES_PRODUCT, likesProduct: response.data });
        } catch (error) {
            console.error(error);
        };
    };
};