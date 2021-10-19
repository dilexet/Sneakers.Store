import {ACTION_TYPES} from '../../Shared/variables/actionTypes';
import api from "./favoriteAPI";

export const GetFavorite = () => dispatch => {
    const cartId = localStorage.getItem("cartId");
    api.favorite().getFavorite(cartId)
        .then(response => {
            console.log(response)
            dispatch({
                type: ACTION_TYPES.GET_FAVORITE,
                payload: response.data.FavoriteItems
            })
        })
        .catch(err => console.log(err))
}

export const AddToFavorite = (Id) => dispatch => {
    const cartId = localStorage.getItem("cartId");
    api.favorite().addToFavorite(Id, cartId)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.ADD_TO_FAVORITE,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}

export const RemoveFromFavorite = (Id) => dispatch => {
    const cartId = localStorage.getItem("cartId");
    api.favorite().removeFromFavorite(Id, cartId)
        .then(() => {
            dispatch({
                type: ACTION_TYPES.REMOVE_FROM_FAVORITE,
                payload: Id
            })
        })
        .catch(err => console.log(err))
}
