import {ACTION_TYPES} from "../variables/actionTypes";

const initialState = {
    searchQuery: '',
    sortBy: 'all'
}

export const filter = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.SORT:
            return {
                ...state,
                sortBy: action.payload
            }
        case ACTION_TYPES.SEARCH:
            return {
                ...state,
                searchQuery: action.payload
            }
        default:
            return state
    }
}