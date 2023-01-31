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


const Register = (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()
    const iconTintColor = useColorModeValue('primary.800', '#fff');
    let defaultValues = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    }
    const { control, handleSubmit, formState: { errors }, } = useForm({ defaultValues });

    const onSubmit = async (data) => {
        setIsLoading(true)
        let res = await APIService.postData(httpConfig.endPoints.signup, data);
        if (!res.errMsg) {
            console.log("res",  JSON.stringify(res))
        }else{
            console.log("error",res.errMsg)
        }
       
        setIsLoading(false)
    };


    const checkapi = async () => {
        let res = await APIService.getData("test");
        console.log( "test res" ,res)     
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
            >Create Account </Text>
            <VStack pt={6} space={5} w={"80%"}>
                <InputBox
                    fieldName="username"
                    placeholder="username"
                    iconName={"person"}
                    iconTintColor={iconTintColor}
                    control={control}
                    errors={errors}
                />

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

                <InputBox
                    fieldName="confirmPassword"
                    // type={"password"}
                    placeholder='Ux@yZ12'
                    iconName={"ios-lock-open"}
                    iconTintColor={iconTintColor}
                    control={control}
                    errors={errors}
                />

            </VStack>

            <Button
                onPress={handleSubmit(onSubmit)}
                title={"sign up"}
                w={"80%"}
                mt={10}
            />

            <Pressable mt={3}
                onPress={() => props.navigation.navigate("LoginScreen")}>
                <Text >Already have an account? login</Text>
            </Pressable>
        </Center>
    )
}

export default Register