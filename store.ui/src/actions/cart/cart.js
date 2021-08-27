import {ACTION_TYPES} from '../../variables/actionTypes';
import api from "./cartAPI";

export const GetCart = () => dispatch => {
    const cartId = localStorage.getItem("cartId");
    api.cart().getCart(cartId)
        .then(response => {
            localStorage.setItem("cartId", response.data.CartId);
            dispatch({
                type: ACTION_TYPES.GET_CART,
                payload: response.data.CartItems
            })
        })
        .catch(err => console.log(err))
}

export const AddToCart = (Id) => dispatch => {
    const cartId = localStorage.getItem("cartId");
    api.cart().addToCart(Id, cartId)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.ADD_TO_CART,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}

export const UpdateCount = (Id) => dispatch => {
    const cartId = localStorage.getItem("cartId");
    api.cart().updateCount(Id, cartId)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.UPDATE_CART,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}

export const RemoveFromCart = (Id) => dispatch => {
    const cartId = localStorage.getItem("cartId");
    api.cart().removeFromCart(Id, cartId)
        .then(() => {
            dispatch({
                type: ACTION_TYPES.REMOVE_FROM_CART,
                payload: Id
            })
        })
        .catch(err => console.log(err))
}
