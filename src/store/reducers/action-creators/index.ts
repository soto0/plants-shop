import * as PlantsActionCreators from './Plants';
import * as PostsActionsCreators from './Posts';

export default {
    ...PlantsActionCreators,
    ...PostsActionsCreators
};