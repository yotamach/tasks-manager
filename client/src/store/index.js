import { createStore, combineReducers } from "redux";
import userReducer from './user/index';
import tasksReducer from './tasks/index';

const rootReducer = combineReducers({user: userReducer, tasks: tasksReducer})

const store = createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;