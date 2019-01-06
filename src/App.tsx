import React from "react"
import { Root } from "native-base"
import { StackNavigator, createDrawerNavigator, DrawerNavigator, createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation"
import { StyleProvider } from 'native-base'

import RootStack from "./components/RootStack"
import getTheme from './native-base-theme/components'

const App = createAppContainer(RootStack)

export default () => (
    <Root>
        <StyleProvider style={getTheme()}>
            <App />
        </StyleProvider>
    </Root>
)
