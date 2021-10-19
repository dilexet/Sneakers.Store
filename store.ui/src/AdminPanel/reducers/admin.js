import {ACTION_TYPES} from "../../Shared/variables/actionTypes";

const initialState = {
    list: [],
    isLoading: false
}

export const admin = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                list: [...action.payload],
                isLoading: true
            }

        case ACTION_TYPES.CREATE:
            return {
                ...state,
                list: [...state.list, action.payload]

            }
        case ACTION_TYPES.UPDATE:
            return {
                ...state,
                list: state.list.map(x => x.Id !== action.payload.Id ? x : action.payload),
            }

        case ACTION_TYPES.DELETE:
            return {
                ...state,
                list: state.list.filter(x => x.Id !== action.payload),
            }

        default:
            return state
    }
}