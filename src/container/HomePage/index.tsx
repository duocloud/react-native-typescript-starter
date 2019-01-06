import * as React from "react"
import {connect} from "react-redux"
import {withNavigation} from 'react-navigation'
import Home from "./components/Home"
import {UserEntity} from "../../types";

export interface Props {
    user: UserEntity
}

export interface State {
}

const mapStateToProps = (state: any) => ({
    user: state.user,
})

const mapDispatchToProps = {
}

@withNavigation
@connect (
    mapStateToProps,
    mapDispatchToProps
)
class HomePage extends React.Component<Props, State> {
    render() {
        return (
            <Home />
        )
    }
}

export default HomePage
