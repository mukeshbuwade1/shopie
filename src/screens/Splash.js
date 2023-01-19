import { CommonActions } from '@react-navigation/native'
import { View, Text, Center, Heading } from 'native-base'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { getProportionalFontSize } from '../utilies/methods/CommonMathods'
import { useDispatch, useSelector } from 'react-redux';
import asyncStorage from "../services/AsyncStoreService"
import { updateUserData } from '../redux/userSlice';
import Constant from '../constants/Constant'

const Splash = (props) => {
    const dispatch = useDispatch()

    const navigateTo = (params) => {
        props.navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [
                    { name: "AuthNavigation", params },
                ],
            })
        );
    }

    async function isUserAlreadyLoggedIn() {
        let valueObj = new Object
        let values = await asyncStorage._getMultiple([Constant.async_key.newToApp, Constant.async_key.user])
        if (!values.errMsg) {
            values.map(e => {
                if (e[1] != null && typeof e[1] == "string")
                    valueObj = { ...valueObj, [e[0]]: JSON.parse(e[1])}
                else
                    valueObj = { ...valueObj, [e[0]]: e[1] }
            })
        }
        if (valueObj[Constant.async_key.newToApp] == null && valueObj[Constant.async_key.user] == null) {
            navigateTo({ initialPath: "Onboarding"})
            return
        }
        else if (valueObj[Constant.async_key.user]?.token) {
             dispatch(updateUserData(valueObj[Constant.async_key.user]))
            navigateTo()
        } else {
            navigateTo()
        }
    }

    useEffect(() => {
        isUserAlreadyLoggedIn()
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Center flex={1}>
                <Text style={{
                    fontFamily: "NunitoSans-Bold",
                    letterSpacing: 2,
                    lineHeight: 50,
                    fontSize: getProportionalFontSize(25)
                }} >BASICS</Text>
            </Center>
        </SafeAreaView>
    )
}

export default Splash