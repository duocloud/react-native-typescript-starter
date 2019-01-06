"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const native_base_1 = require("native-base");
const deviceWidthDp = react_native_1.Dimensions.get('window').width;
const uiWidthPx = 720;
function arrayIsEmpty(array) {
    return !array || array.length < 0;
}
exports.arrayIsEmpty = arrayIsEmpty;
function pxToDp(uiElementPx) {
    return uiElementPx * deviceWidthDp / uiWidthPx;
}
exports.pxToDp = pxToDp;
exports.handleRes = (res, callback) => {
    res
        .then(res => {
        console.log(res);
        if (res.status === 200)
            callback();
        return res;
    })
        .catch(err => {
        native_base_1.Toast.show({
            text: err.response.data.msg,
        });
    });
};
