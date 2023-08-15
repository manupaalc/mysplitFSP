import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import entitiesReducer from "./entitiesReducer"
import thunk from 'redux-thunk'
import sessionReducer from "./sessionReducer"


const dummyReducer = (state = {}, action) => state

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    ui: dummyReducer

})

const configureStore = (preloadedState = {}) => (
    legacy_createStore(rootReducer, preloadedState, applyMiddleware(thunk))
)
export default configureStore;