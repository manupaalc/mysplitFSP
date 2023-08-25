import { combineReducers } from 'redux';
import usersReducer from './usersReducer'; 
import groupReducer from './groupsReducer';
import friendsReducer from './friendsReducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    groups: groupReducer,
    friends: friendsReducer
    // Add other entity-related reducers here if needed
});

export default entitiesReducer;