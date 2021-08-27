import api from "./catalogAPI";
import {ACTION_TYPES} from '../../variables/actionTypes';


export const FetchAll = (onSuccess) => dispatch => {
    api.catalog().fetchAll()
        .then(response => {
            dispatch({
                type: ACTION_TYPES.FETCH_ALL,
                payload: response.data
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}


export const FetchById = (Id, onSuccess) => dispatch => {
    api.catalog().fetchById()
        .then(response => {
            dispatch({
                type: ACTION_TYPES.FETCH_BY_ID,
                payload: response.data
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}

export const Sort = (sortBy, onSuccess) => dispatch => {
    api.catalog().sort(sortBy)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.SORT,
                payload: {
                    list: response.data,
                    sortBy: sortBy,
                }
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}


export const Search = (searchQuery, onSuccess) => dispatch => {
    api.catalog().search(searchQuery)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.SEARCH,
                payload: {
                    list: response.data,
                    searchQuery: searchQuery,
                }
            })
            onSuccess()
        })
        .catch(err => console.log(err))

}