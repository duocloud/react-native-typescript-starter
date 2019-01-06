"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const types = __importStar(require("../ActionTypes"));
const initialState = {
    user: {},
};
function default_1(state = initialState, action) {
    switch (action.type) {
        case types.GET_USER:
            return Object.assign({}, state, { user: action.data });
        default:
            return state;
    }
}
exports.default = default_1;
