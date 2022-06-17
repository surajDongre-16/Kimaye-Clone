import { legacy_createStore, applyMiddleware, compose, combineReducers } from "redux";
import  cartReducer  from "./cart/cart.reducer"
import thunk from "redux-thunk"

const rootReducer=combineReducers({cart : cartReducer})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));