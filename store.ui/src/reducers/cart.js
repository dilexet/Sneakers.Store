import {ACTION_TYPES} from "../variables/actionTypes";

const initialState = {
    list: []
}

export const cart = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.GET_CART:
            return {
                ...state,
                list: [...action.payload]
            }
        case ACTION_TYPES.ADD_TO_CART:
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        case ACTION_TYPES.UPDATE_CART:
            return {
                ...state,
                list: state.list.map(x => x.Id === action.payload.Id ? action.payload : x),
            }

        // TODO: похожу логику прописать в ADD и удалить UPDATE
        case ACTION_TYPES.REMOVE_FROM_CART: {
            let item = state.list.find(x => x.Id === action.payload);
            if (item.CountProducts <= 1) {
                return {
                    ...state,
                    list: state.list.filter(x => x.Id !== action.payload),
                }
            } else {
                item.CountProducts--;
                return {
                    ...state,
                    list: state.list.map(x => x.Id === action.payload ? item : x),
                }
            }
        }

        case ACTION_TYPES.CHECKOUT:
            return {
                list: []
            }

        default:
            return state
    }
}