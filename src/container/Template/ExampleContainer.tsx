import React from "react"
import {connect} from "react-redux"
import {View} from "native-base"

interface Props {
    user: any
}

interface State {
}

const mapStateToProps = (state: any) => ({
    user: state.user,
})

const mapDispatchToProps = {
}

@connect(
    mapStateToProps,
    mapDispatchToProps
)
export class ExampleContainer extends React.Component<Props, State> {
    render () {
        return (
            <View />
        )
    }
}
