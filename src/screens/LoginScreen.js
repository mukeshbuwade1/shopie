import { Box, Center, Heading, Image, Input, Pressable, Text, useColorModeValue, View, VStack } from 'native-base'
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Button from '../components/Button';
import { getProportionalFontSize } from '../utilies/methods/CommonMathods';
import { useForm, Controller } from "react-hook-form";
import InputBox from '../components/InputBox';
import APIService from '../services/APIService';
import httpConfig from '../constants/httpConfig';
import asyncStorage from "../services/AsyncStoreService"
import Constant from "../constants/Constant"
import { useSelector, useDispatch } from 'react-redux';
import { updateUserData } from '../redux/userSlice';
import Loader from '../components/Loader';

const LoginScreen = (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()
    const iconTintColor = useColorModeValue('primary.800', '#fff');
    let defaultValues = {
        email: '',
        password: ''
    }
    const { control, handleSubmit, formState: { errors }, } = useForm({ defaultValues });

    const onSubmit = async (data) => {
        setIsLoading(true)
        let res = await APIService.postData(httpConfig.endPoints.login, data);
        if (!res.errMsg) {
            console.log("res", typeof res?.data?.data, res?.data?.data)
            let d = JSON.stringify(res?.data?.data)
            await asyncStorage._setItem(Constant.async_key.user, d)
            await dispatch(updateUserData(res?.data?.data))
        }
        setIsLoading(false)
    };

    return (
        <Center flex={1}>
            {
                isLoading
                    ? <Loader />
                    : null
            }
            <Text
                style={{
                    fontFamily: "NunitoSans-Bold",
                    fontSize: getProportionalFontSize(17), textTransform: "uppercase"
                }}
            >log in </Text>
            <VStack pt={6} space={5} w={"80%"}>
                <InputBox
                    fieldName="email"
                    placeholder="mukesh@gmail.com"
                    iconName={"mail"}
                    iconTintColor={iconTintColor}
                    control={control}
                    errors={errors}
                />

                <InputBox
                    fieldName="password"
                    type={"password"}
                    placeholder='********'
                    iconName={"ios-lock-open"}
                    iconTintColor={iconTintColor}
                    control={control}
                    errors={errors}
                />

            </VStack>

            <Button
                onPress={handleSubmit(onSubmit)}
                title={"log in"}
                w={"80%"}
                mt={10}
            />

            <Pressable mt={3}
                onPress={() => alert("screen is under construction")}>
                <Text >New user? SignUp</Text>
            </Pressable>
            <Pressable
                onPress={() => alert("screen is under construction")}>
                <Text color={"gray.600"}>Forgot Password</Text>
            </Pressable>
        </Center>
    )
}

export default LoginScreen