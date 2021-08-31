import api from "./authAPI";
import {ACTION_TYPES} from '../../variables/actionTypes';

export const GetUser = () => dispatch => {
    api.auth().getUser()
        .then(response => {
            dispatch({
                type: ACTION_TYPES.GET_USER,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}

export const Login = (data) => dispatch => {
    api.auth().login(data)
        .then(response =>  {
            dispatch({
                type: ACTION_TYPES.LOGIN,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}

export const Logout = () => dispatch => {
    api.auth().logout()
        .then(response => {
            dispatch({
                type: ACTION_TYPES.LOGOUT,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}

export const Register = (data) => dispatch => {
    api.auth().register(data)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.REGISTER,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}
