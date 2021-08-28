import {ACTION_TYPES} from "../variables/actionTypes";

const initialState = {
    list: [],
    item: null,
    searchQuery: '',
    sortBy: 'all',
    isLoading: false,
}

export const catalog = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                list: [...action.payload],
                isLoading: true
            }

        case ACTION_TYPES.FETCH_BY_ID:
            return {
                ...state,
                item: action.payload,
                isLoading: true
            }

        // case ACTION_TYPES.SORT:
        //     return {
        //         ...state,
        //         list: [...action.payload.list],
        //         sortBy: action.payload.sortBy,
        //         isLoading: true
        //     }
        //
        // case ACTION_TYPES.SEARCH:
        //     return {
        //         ...state,
        //         list: [...action.payload.list],
        //         searchQuery: action.payload.searchQuery,
        //         isLoading: true
        //     }

        default:
            return state
    }
}