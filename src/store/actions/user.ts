import * as types from '../ActionTypes'
import * as services from '../services/user'
import {ReduxAction} from "../../types/index"
import {Toast} from 'native-base'
import axios from "axios"

export const getUser = () => {
    return dispatch => services.getUser()
        .then(res => {
            if (res.status === 200) {
                axios.defaults.headers.common.Authorization = `Bearer ${res.data.data["access_token"]}`
                dispatch({
                    type: types.GET_USER,
                    data: res.data.data,
                } as ReduxAction)
            }
        })
        .catch(err => Toast.show({text: err.response.data.msg}))
}
