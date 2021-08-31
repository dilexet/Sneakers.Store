import {ACTION_TYPES} from "../variables/actionTypes";

const initialState = {
    user: null,
    response: '',
    isAuthorize: false // не авторизован
}

export const auth = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.GET_USER:
            return {
                ...state,
                user: action.payload.Result,
                isAuthorize: action.payload.Result !== null
            }
        case ACTION_TYPES.LOGIN:
            return {
                ...state,
                response: action.payload,
                isAuthorize: action.payload.Message === 'success'
            }
        case ACTION_TYPES.LOGOUT:
            return {
                ...state,
                response: action.payload.Message,
                isAuthorize: false
            }

        case ACTION_TYPES.REGISTER:
            return {
                ...state,
                response: action.payload
            }
        default:
            return state
    }
}