import {Dimensions} from 'react-native'
import {Toast} from 'native-base'

const deviceWidthDp = Dimensions.get('window').width;
const uiWidthPx = 720

export function arrayIsEmpty (array) {
    return !array || array.length < 0
}

export function pxToDp(uiElementPx) {
    return uiElementPx * deviceWidthDp / uiWidthPx
}

export const handleRes = (res: any, callback: Function) => {
    res
        .then(res => {
            console.log(res)
            if (res.status === 200) callback()
            return res
        })
        .catch(err => {
            Toast.show({
                text: err.response.data.msg,
            })
        })
}
