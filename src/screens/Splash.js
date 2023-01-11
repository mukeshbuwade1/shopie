import { View, Text, Center, Heading } from 'native-base'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { getProportionalFontSize } from '../utilies/methods/CommonMathods'

const Splash = () => {
    return (
        <SafeAreaView style={{flex:1}}>
            <Center flex={1}>
                <Heading style={{
                    fontWeight:"700",
                    letterSpacing:2,
                    fontSize:getProportionalFontSize(30)
                }} >BASICS</Heading>
            </Center>
        </SafeAreaView>
    )
}

export default Splash