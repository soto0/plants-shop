import * as PlantsActionCreators from './Plants';
import * as PostsActionCreators from './Posts';
import * as LoginActionCreators from './Login';

export default {
    ...PlantsActionCreators,
    ...PostsActionCreators,
    ...LoginActionCreators
};