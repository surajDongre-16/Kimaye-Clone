import { legacy_createStore, applyMiddleware, compose, combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer"
import thunk from "redux-thunk"

import { blogReducer } from "./blog/reducer";
import { productReducer } from "./productReducer";

const rootReducer = combineReducers({
    cart: cartReducer,
    blog: blogReducer,
    product: productReducer,

})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));