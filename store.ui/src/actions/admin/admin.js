import api from "./adminAPI";
import {ACTION_TYPES} from '../../variables/actionTypes';

export const FetchAll = () => dispatch => {
    api.admin().fetchAll()
        .then(response => {
            dispatch({
                type: ACTION_TYPES.FETCH_ALL,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}

export const Create = (data, onSuccess) => dispatch => {
    api.admin().create(data)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.CREATE,
                payload: response.data
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}

export const Update = (id, data, onSuccess) => dispatch => {
    api.admin().update(id, data)
        .then(() => {
            dispatch({
                type: ACTION_TYPES.UPDATE,
                payload: {id, ...data}
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}

export const Delete = (Id, onSuccess) => dispatch => {
    api.admin().delete(Id)
        .then(() => {
            dispatch({
                type: ACTION_TYPES.DELETE,
                payload: Id
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}