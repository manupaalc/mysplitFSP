import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux"
import thunk from 'redux-thunk'
import sessionReducer from "./sessionReducer"
import errorsReducer from "./errorsReducers"


const dummyReducer = (state = {}, action) => state

const rootReducer = combineReducers({
    
    session: sessionReducer,
    ui: dummyReducer,
    errors: errorsReducer

})

let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState = {}) => (
    legacy_createStore(rootReducer, preloadedState, enhancer)
)
export default configureStore;