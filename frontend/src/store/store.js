import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import entitiesReducer from "./entitiesReducer"


const dummyReducer = (state = {}, action) => state

const rootReducer = combineReducers({
    entities: entitiesReducer
})

const configureStore = (preloadedState = {}) => (
    legacy_createStore(rootReducer, preloadedState, applyMiddleware(thunk))
)
export default configureStore;