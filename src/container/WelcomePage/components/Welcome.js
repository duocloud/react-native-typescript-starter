"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const native_base_1 = require("native-base");
const react_navigation_1 = require("react-navigation");
const s = react_native_1.StyleSheet.create({
    button: {
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    wrapper: {
        height: 100,
        width: 100,
    }
});
let Welcome = class Welcome extends react_1.default.PureComponent {
    render() {
        const { navigation } = this.props;
        return (react_1.default.createElement(native_base_1.Container, null,
            react_1.default.createElement(native_base_1.View, { padder: true },
                react_1.default.createElement(native_base_1.Button, { full: true, onPress: () => {
                        navigation.navigate('Login');
                    } },
                    react_1.default.createElement(react_native_1.Text, { style: s.buttonText }, "\u5F00\u59CB\u4F7F\u7528")))));
    }
};
Welcome = __decorate([
    react_navigation_1.withNavigation
], Welcome);
exports.default = Welcome;
