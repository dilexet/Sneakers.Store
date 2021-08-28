import {combineReducers} from "redux";
import {catalog} from "./catalog";
import {cart} from "./cart";
import {admin} from "./admin";

export const reducers = combineReducers({
    catalog, cart, admin,
})