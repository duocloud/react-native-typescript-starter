import React from 'react'
import { View, Text, Spinner } from 'native-base'

const PageLoading = () => (<View>
    <Spinner color='green' />
    <Text>加载中...</Text>
</View>)

export default PageLoading
