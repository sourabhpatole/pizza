import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllPizzasreducer } from "./reducers/pizzaReducer";

const finalReducer = combineReducers({
  getAllPizzasreducer: getAllPizzasreducer,
});
const initialState = {};
const composeEnhancers = composeWithDevTools({});
const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
