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
const react_redux_1 = require("react-redux");
const Welcome_1 = __importDefault(require("./components/Welcome"));
let WelcomePage = class WelcomePage extends react_1.default.PureComponent {
    render() {
        return (react_1.default.createElement(react_native_1.SafeAreaView, null,
            react_1.default.createElement(react_native_1.View, { style: {
                    width: 500,
                    height: 500,
                    alignItems: 'center',
                    justifyContent: 'center',
                } },
                react_1.default.createElement(react_native_1.Text, { style: {
                        fontSize: 30,
                        fontWeight: 'bold',
                    } }, "show something...")),
            react_1.default.createElement(Welcome_1.default, null)));
    }
};
WelcomePage = __decorate([
    react_redux_1.connect(state => state.system)
], WelcomePage);
exports.default = WelcomePage;
