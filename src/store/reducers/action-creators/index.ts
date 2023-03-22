import * as PlantsActionCreators from './Plants';
import * as PostsActionCreators from './Posts';
import * as LoginActionCreators from './Login';
import * as LikesActionCreators from './Likes';
import * as BasketActionCreators from './Basket';

export default {
    ...PlantsActionCreators,
    ...PostsActionCreators,
    ...LoginActionCreators,
    ...LikesActionCreators,
    ...BasketActionCreators
};