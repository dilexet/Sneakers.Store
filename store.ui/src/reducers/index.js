import {combineReducers} from "redux";
import {catalog} from "./catalog";
import {cart} from "./cart";
import {admin} from "./admin";
import {filter} from "./filter";

export const reducers = combineReducers({
    product: catalog, cart, admin, filter
    // filter,
})