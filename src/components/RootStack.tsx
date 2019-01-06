import React from "react"
import {Icon} from "native-base"
import HomePage from "../container/HomePage"
import UserCenter from "../container/UserCenter"
import WelcomePage from "../container/WelcomePage"
// @ts-ignore
import {
    createAppContainer,
    createBottomTabNavigator,
    createStackNavigator,
    createSwitchNavigator
} from "react-navigation"
import StackViewStyleInterpolator from "react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator"

const TabNav = createBottomTabNavigator({
    Home: {
        screen: HomePage,
        navigationOptions: () => ({
            title: `Home`,
            tabBarIcon: () => <Icon name='home' type='FontAwesome' color='#517fa4' />,
            headerBackTitle: null
        }),
    },
    CookBook: {
        screen: UserCenter,
        navigationOptions: () => ({
            title: `Me`,
            tabBarIcon: () => <Icon name='flask' type='FontAwesome' color='#517fa4' />,
            headerBackTitle: null
        }),
    }
}, {
    initialRouteName: 'CookBook',
    // initialRouteName: 'Home',
})

const RootStack = createStackNavigator({
        Main: TabNav,
    },
    {
        headerMode: 'none',
        transitionConfig: () => ({
            screenInterpolator: StackViewStyleInterpolator.forHorizontal,
        })
    }
)

const AuthStack = createStackNavigator({
        Welcome: WelcomePage,
    },
    {
        headerMode: 'none',
    }
)

export default createAppContainer(
    createSwitchNavigator({
        App: RootStack,
        Auth: AuthStack,
    }
))
