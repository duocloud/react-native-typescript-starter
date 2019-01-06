import React from "react"
import { View, Text } from "native-base"
import {UserEntity} from "../../../types/index";

interface Props {
    user: UserEntity
}

const User = ({ user }: Props) => (
    <View>
        <Text>Hello {user.username}</Text>
        <Text>Hello {user.intro}</Text>
    </View>)

export default User
