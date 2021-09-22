import { createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunkMiddleware from 'redux-thunk';
import userReducer from './users/index';
import tasksReducer from './tasks/index';
import errorsReducer from './errors/index';
import loaderReducer from "./loader";

const rootReducer = combineReducers({
	user: userReducer,
	tasks: tasksReducer,
	errors: errorsReducer,
	loader: loaderReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunkMiddleware)),
);

export default store;