import {ACTION_TYPES} from '../../Shared/variables/actionTypes';
import api from "./orderAPI";

export const Checkout = (data) => dispatch => {
    const cartId = localStorage.getItem("cartId");
    api.order().checkout(cartId, data)
        .then(() => {
            dispatch({
                type: ACTION_TYPES.CHECKOUT,
                payload: data
            })
        })
        .catch(err => console.log(err))
}