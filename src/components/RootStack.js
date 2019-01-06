"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const native_base_1 = require("native-base");
const HomePage_1 = __importDefault(require("../container/HomePage"));
const UserCenter_1 = __importDefault(require("../container/UserCenter"));
const WelcomePage_1 = __importDefault(require("../container/WelcomePage"));
// @ts-ignore
const react_navigation_1 = require("react-navigation");
const StackViewStyleInterpolator_1 = __importDefault(require("react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator"));
const TabNav = react_navigation_1.createBottomTabNavigator({
    Home: {
        screen: HomePage_1.default,
        navigationOptions: () => ({
            title: `Home`,
            tabBarIcon: () => react_1.default.createElement(native_base_1.Icon, { name: 'home', type: 'FontAwesome', color: '#517fa4' }),
            headerBackTitle: null
        }),
    },
    CookBook: {
        screen: UserCenter_1.default,
        navigationOptions: () => ({
            title: `Me`,
            tabBarIcon: () => react_1.default.createElement(native_base_1.Icon, { name: 'flask', type: 'FontAwesome', color: '#517fa4' }),
            headerBackTitle: null
        }),
    }
}, {
    initialRouteName: 'CookBook',
});
const RootStack = react_navigation_1.createStackNavigator({
    Main: TabNav,
}, {
    headerMode: 'none',
    transitionConfig: () => ({
        screenInterpolator: StackViewStyleInterpolator_1.default.forHorizontal,
    })
});
const AuthStack = react_navigation_1.createStackNavigator({
    Welcome: WelcomePage_1.default,
}, {
    headerMode: 'none',
});
exports.default = react_navigation_1.createAppContainer(react_navigation_1.createSwitchNavigator({
    App: RootStack,
    Auth: AuthStack,
}));
