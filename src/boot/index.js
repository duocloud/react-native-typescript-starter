"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// @ts-ignore
const react_redux_1 = require("react-redux");
const react_2 = require("redux-persist/integration/react");
const configureStore_1 = __importDefault(require("./configureStore"));
const App_1 = __importDefault(require("../App"));
const config_1 = __importDefault(require("../config"));
const mock_1 = __importDefault(require("../mock"));
const { store, persist } = configureStore_1.default();
const init = () => {
    config_1.default.useMock && mock_1.default();
};
class Setup extends react_1.default.Component {
    componentWillMount() {
        init();
    }
    render() {
        return (react_1.default.createElement(react_redux_1.Provider, { store: store },
            react_1.default.createElement(react_2.PersistGate, { loading: null, persistor: persist },
                react_1.default.createElement(App_1.default, null))));
    }
}
exports.default = Setup;
