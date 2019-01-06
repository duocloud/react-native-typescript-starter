"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const types = __importStar(require("../ActionTypes"));
const services = __importStar(require("../services/user"));
const native_base_1 = require("native-base");
const axios_1 = __importDefault(require("axios"));
exports.getUser = () => {
    return dispatch => services.getUser()
        .then(res => {
        if (res.status === 200) {
            axios_1.default.defaults.headers.common.Authorization = `Bearer ${res.data.data["access_token"]}`;
            dispatch({
                type: types.GET_USER,
                data: res.data.data,
            });
        }
    })
        .catch(err => native_base_1.Toast.show({ text: err.response.data.msg }));
};
