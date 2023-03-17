import axios from 'axios';
import { Dispatch } from 'redux';
import { PostsAction, PostsTypes } from './../../../types/Posts';

export const getPosts = () => {
    return async (dispatch: Dispatch<PostsAction>) => {
        const response = await axios.get('http://localhost:3001/Posts');
        dispatch({ type: PostsTypes.GET_POSTS, posts: response.data });
    };
};