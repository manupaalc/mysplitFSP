import { combineReducers } from 'redux';
import usersReducer from './usersReducer'; // Import your usersReducer

const entitiesReducer = combineReducers({
    users: usersReducer,
    // Add other entity-related reducers here if needed
});

export default entitiesReducer;