import * as types from '../ActionTypes'
import {
    ReduxAction, UserEntity
} from "../../types"

interface HomeInitialState {
    user?: UserEntity | null
}

const initialState: HomeInitialState = {
    user: {} as UserEntity,
}

export default function(state = initialState, action: ReduxAction) {
    switch (action.type) {
        case types.GET_USER:
            return { ...state, user: action.data }
        default:
            return state
    }
}
