import { combineReducers } from 'redux';
import usersReducer from './usersReducer'; // Import your usersReducer
import groupReducer from './groupsReducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    groups: groupReducer
    // Add other entity-related reducers here if needed
});

export default entitiesReducer;