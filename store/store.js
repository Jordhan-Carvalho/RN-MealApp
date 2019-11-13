import { createStore, combineReducers } from "redux";
import mealsReducer from "../store/reducers/meals";

const rootReducer = combineReducers({
  mealsReducer
});

const store = createStore(rootReducer);

export default store;

// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers';

// const initialState= {};

// const middleware = [thunk];

// const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

// export default store;
