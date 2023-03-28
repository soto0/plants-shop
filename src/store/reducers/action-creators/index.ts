import * as PlantsActionCreators from './Plants';
import * as PostsActionCreators from './Posts';
import * as LoginActionCreators from './Login';
import * as LikesActionCreators from './Likes';
import * as BasketActionCreators from './Basket';
import * as PlantActionCreators from './Plant';
import * as ShoppingCartActionCreators from './ShoppingCart';
import * as CheckoutActionCreators from './Checkout';

export default {
    ...PlantsActionCreators,
    ...PostsActionCreators,
    ...LoginActionCreators,
    ...LikesActionCreators,
    ...BasketActionCreators,
    ...PlantActionCreators,
    ...ShoppingCartActionCreators,
    ...CheckoutActionCreators
};