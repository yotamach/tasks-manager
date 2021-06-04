import { createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunkMiddleware from 'redux-thunk';
import userReducer from './user/index';
import tasksReducer from './tasks/index';
import errorsReducer from './errors/index';

const rootReducer = combineReducers({
	user: userReducer,
	tasks: tasksReducer,
	errors: errorsReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunkMiddleware)),
);

export default store;