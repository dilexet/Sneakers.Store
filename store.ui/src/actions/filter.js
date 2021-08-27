import {ACTION_TYPES} from '../variables/actionTypes';

export const Sort = (sortBy) => dispatch => {
    dispatch({
        type: ACTION_TYPES.SORT,
        payload: sortBy
    })
}

export const Search = (searchQuery) => dispatch => {
    dispatch({
        type: ACTION_TYPES.SEARCH,
        payload: searchQuery
    })
}