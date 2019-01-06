"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const axios_mock_adapter_1 = __importDefault(require("axios-mock-adapter"));
/**
 * Initialize Mock Data
 *
 */
const initialize = () => {
    const mock = new axios_mock_adapter_1.default(axios_1.default);
    mock.onGet('/user').reply(200, require('./user.json'));
};
exports.default = initialize;
