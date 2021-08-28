import api from "./catalogAPI";
import {ACTION_TYPES} from '../../variables/actionTypes';


export const FetchAll = () => dispatch => {
    api.catalog().fetchAll()
        .then(response => {
            dispatch({
                type: ACTION_TYPES.FETCH_ALL,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}


export const FetchById = (Id) => dispatch => {
    api.catalog().fetchById(Id)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.FETCH_BY_ID,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}

export const Sort = (sortBy) => dispatch => {
    api.catalog().sort(sortBy)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.SORT,
                payload: {
                    list: response.data,
                    sortBy: sortBy,
                }
            })
        })
        .catch(err => console.log(err))
}


export const Search = (searchQuery) => dispatch => {
    api.catalog().search(searchQuery)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.SEARCH,
                payload: {
                    list: response.data,
                    searchQuery: searchQuery,
                }
            })
        })
        .catch(err => console.log(err))

}