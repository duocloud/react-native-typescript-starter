"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
const React = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const User_1 = __importDefault(require("./components/User"));
const user_1 = require("../../store/actions/user");
const PageLoading_1 = __importDefault(require("../../components/PageLoading"));
const mapStateToProps = (state) => ({
    user: state.user,
});
const mapDispatchToProps = {
    toGetUser: user_1.getUser
};
let UserCenter = class UserCenter extends React.PureComponent {
    componentWillMount() {
        const { user, toGetUser } = this.props;
        if (!user) {
            toGetUser();
        }
    }
    render() {
        const { user } = this.props;
        if (!user)
            return React.createElement(PageLoading_1.default, null);
        return (React.createElement(User_1.default, { user: user }));
    }
};
UserCenter = __decorate([
    react_redux_1.connect(mapStateToProps, mapDispatchToProps)
], UserCenter);
exports.default = UserCenter;
