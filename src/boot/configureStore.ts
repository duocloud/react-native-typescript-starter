// @ts-ignore
import devTools from "remote-redux-devtools"
import {applyMiddleware, compose, createStore} from "redux"
import {persistReducer, persistStore} from "redux-persist"
import thunk from "redux-thunk"
import storage from 'redux-persist/lib/storage'
import rootReducer from "../store/reducers/index"

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['system'],
}

const middleware = [thunk]

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
    let store = createStore(
        persistedReducer,
        compose(
            applyMiddleware(...middleware),
            devTools({
                name: 'soco',
                realtime: true
            })
        )
    )

    let persist = persistStore(store)

    return { store, persist }
}
