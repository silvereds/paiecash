import {combineReducers} from 'redux';

import Card from './card/reducers';
import User from './user/reducers';

export default combineReducers({
    Card,
    User,
});