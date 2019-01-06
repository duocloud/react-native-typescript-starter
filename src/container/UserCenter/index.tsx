import * as React from "react"
import {connect} from "react-redux"
import User from "./components/User"
import {UserEntity} from "../../types"
import {getUser} from "../../store/actions/user"
import PageLoading from "../../components/PageLoading"

export interface Props {
    user: UserEntity,
    toGetUser(): void,
}
export interface State {}

const mapStateToProps = (state: any) => ({
    user: state.user,
})

const mapDispatchToProps = {
    toGetUser: getUser
}

@connect(
    mapStateToProps,
    mapDispatchToProps
)
class UserCenter extends React.PureComponent<Props, State> {
    componentWillMount() {
        const { user, toGetUser } = this.props
        if (!user) {
            toGetUser()
        }
    }
    render() {
        const { user } = this.props

        if (!user) return <PageLoading />

       return (
           <User user={user} />
       )
    }
}

export default UserCenter
