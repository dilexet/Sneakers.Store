import {combineReducers} from "redux";
import {catalog} from "../../Catalog/reducers/catalog";
import {cart} from "../../Cart/reducers/cart";
import {admin} from "../../AdminPanel/reducers/admin";
import {auth} from "../../Authentication/reducers/auth";
import {favorite} from "../../Favorite/reducers/favorite";

export const reducers = combineReducers({
    catalog, cart, admin, auth, favorite
})