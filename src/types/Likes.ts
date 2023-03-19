export interface LikesState {
    LikesProduct: any
};

export enum LikesTypes {
    GET_LIKES_PRODUCT = 'GET_LIKES_PRODUCT'
};

interface getLikesProduct {
    type: LikesTypes.GET_LIKES_PRODUCT,
    likesProduct: []
};

export type LikesAction = getLikesProduct;