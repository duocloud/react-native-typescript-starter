"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const native_base_1 = require("native-base");
const PageLoading = () => (react_1.default.createElement(native_base_1.View, null,
    react_1.default.createElement(native_base_1.Spinner, { color: 'green' }),
    react_1.default.createElement(native_base_1.Text, null, "\u52A0\u8F7D\u4E2D...")));
exports.default = PageLoading;
