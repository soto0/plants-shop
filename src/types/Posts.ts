export interface PostsState {
    Posts: []
};

export enum PostsTypes {
    GET_POSTS = 'GET_POSTS'
};

interface getPosts {
    type: PostsTypes.GET_POSTS,
    posts: []
};

export type PostsAction = getPosts;