import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'
import userReducer from './user/index';
import tasksReducer from './tasks/index';

const rootReducer = combineReducers({user: userReducer, tasks: tasksReducer})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(
        rootReducer,
        composeEnhancer(applyMiddleware(thunkMiddleware)),
    );

export default store;