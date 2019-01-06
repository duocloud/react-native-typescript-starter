import React from "react"
// @ts-ignore
import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from "./configureStore"
import App from '../App'
import config from '../config'
import initialize from "../mock"

const { store, persist } = configureStore()

export interface Props {}
export interface State {
    store: Object
    isLoading: boolean
    isReady: boolean
}

const init = () => {
    config.useMock && initialize()
}

class Setup extends React.Component<Props, State> {
    componentWillMount() {
        init()
    }

    render () {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persist}>
                    <App />
                </PersistGate>
            </Provider>
        )
    }
}

export default Setup
