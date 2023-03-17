import { PostsState, PostsAction, PostsTypes } from './../../types/Posts';

const initialState: PostsState = {
    Posts: []
};

export const PostsReducer = (state = initialState, action: PostsAction): PostsState => {
    switch (action.type) {
        case PostsTypes.GET_POSTS:
            return { ...state, Posts: action.posts }
        default: 
            return state
    };
}; 