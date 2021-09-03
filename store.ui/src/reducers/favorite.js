import {ACTION_TYPES} from "../variables/actionTypes";

const initialState = {
    list: []
}

export const favorite = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.GET_FAVORITE:
            return {
                ...state,
                list: [...action.payload]
            }

        case ACTION_TYPES.ADD_TO_FAVORITE:
            return {
                ...state,
                list: [...state.list, action.payload]
            }

        case ACTION_TYPES.REMOVE_FROM_FAVORITE: {
            return {
                ...state,
                list: state.list.filter(x => x.Product.Id !== action.payload),
            }
        }
        default:
            return state
    }
}