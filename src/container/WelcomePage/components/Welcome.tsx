import React from 'react'
import {StyleSheet, Text} from 'react-native'
import {Button, Container, View} from 'native-base'
import {withNavigation} from 'react-navigation'

const s = StyleSheet.create({
    button: {
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    wrapper: {
        height: 100,
        width: 100,
    }
})

export interface WelcomeProps {
    navigation: any,
}

@withNavigation
class Welcome extends React.PureComponent<WelcomeProps, any> {

    render () {
        const { navigation } = this.props

        return (
            <Container>
                <View padder>
                    <Button
                        full
                        onPress={() => {
                            navigation.navigate('Login')
                        }}
                    >
                        <Text style={s.buttonText}>开始使用</Text>
                    </Button>
                </View>
            </Container>
        )
    }
}

export default Welcome
