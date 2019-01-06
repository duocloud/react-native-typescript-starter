"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const native_base_1 = require("native-base");
const s = {
    container: {}
};
const MenuList = ({}) => (react_1.default.createElement(native_base_1.View, { style: s.container },
    react_1.default.createElement(native_base_1.Text, null, "This is an example components")));
exports.default = MenuList;
