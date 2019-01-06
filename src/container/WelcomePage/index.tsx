import React from 'react'
import { Text, SafeAreaView, View } from 'react-native'
import { connect } from 'react-redux'

import Welcome from './components/Welcome'

export interface Props {}
export interface State {}

@connect (
    state => state.system
)
class WelcomePage extends React.PureComponent<Props, State> {

    render() {
        return (
            <SafeAreaView>
                <View style={{
                    width: 500,
                    height: 500,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Text style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                    }}>show something...</Text>
                </View>
                <Welcome />
            </SafeAreaView>
        )
    }
}

export default WelcomePage
