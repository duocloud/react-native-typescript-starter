"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const remote_redux_devtools_1 = __importDefault(require("remote-redux-devtools"));
const redux_1 = require("redux");
const redux_persist_1 = require("redux-persist");
const redux_thunk_1 = __importDefault(require("redux-thunk"));
const storage_1 = __importDefault(require("redux-persist/lib/storage"));
const index_1 = __importDefault(require("../store/reducers/index"));
const persistConfig = {
    key: 'root',
    storage: storage_1.default,
    whitelist: ['system'],
};
const middleware = [redux_thunk_1.default];
const persistedReducer = redux_persist_1.persistReducer(persistConfig, index_1.default);
exports.default = () => {
    let store = redux_1.createStore(persistedReducer, redux_1.compose(redux_1.applyMiddleware(...middleware), remote_redux_devtools_1.default({
        name: 'soco',
        realtime: true
    })));
    let persist = redux_persist_1.persistStore(store);
    return { store, persist };
};
