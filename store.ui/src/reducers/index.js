import {combineReducers} from "redux";
import {catalog} from "./catalog";
import {cart} from "./cart";
import {admin} from "./admin";
import {auth} from "./auth";
import {favorite} from "./favorite";

export const reducers = combineReducers({
    catalog, cart, admin, auth, favorite
})