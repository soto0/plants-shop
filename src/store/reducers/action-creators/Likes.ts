import { LikesAction, LikesTypes } from './../../../types/Likes';
import { Dispatch } from "redux"
import axios from 'axios';

export const getLikesProduct = () => {
    return async (dispatch: Dispatch<LikesAction>) => {
        const response = await axios.get('http://localhost:3001/Likes');
        dispatch({ type: LikesTypes.GET_LIKES_PRODUCT, likesProduct: response.data });
    };
};