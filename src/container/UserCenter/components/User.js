"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const native_base_1 = require("native-base");
const User = ({ user }) => (react_1.default.createElement(native_base_1.View, null,
    react_1.default.createElement(native_base_1.Text, null,
        "Hello ",
        user.username),
    react_1.default.createElement(native_base_1.Text, null,
        "Hello ",
        user.intro)));
exports.default = User;
