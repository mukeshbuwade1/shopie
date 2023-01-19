import Icon from 'react-native-vector-icons/dist/Feather';
import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductList from '../screens/ProductList';
import LoginScreen from '../screens/LoginScreen';
import Onboarding from '../screens/Onboarding';
import asyncStorage from "../services/AsyncStoreService"
import Constant from '../constants/Constant';
import { useSelector } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyTabBar from './MyTabBar';
import SearchScreen from '../screens/SearchScreen';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const AuthNavigation = (props) => {
    const { initialPath } = props?.route?.params || {}
    const token = useSelector(s => s?.user?.token)
    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
        console.log("token", token)
        setAuthenticated(token)
    }, [token])

    if (token) {
        asyncStorage._setItem(Constant.async_key.newToApp, JSON.stringify({ cache_available: true }))
    }

    // component return 
    if (authenticated) {
        return (
            <Tab.Navigator
            
                tabBar={props => <MyTabBar {...props} />}
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={"HomeScreen"}
            >
                <Stack.Screen name="HomeScreen" component={HomeScreen}
                    options={{
                        tabBarLabel: 'home',
                        // tabBarIcon: ({ color, size }) => (
                        //   <Icon name="home" color={color} size={size} />
                        // ),
                        // tabBarBadge: 3,
                    }}
                />
                <Stack.Screen name="SearchScreen" component={SearchScreen}
                    options={{
                        tabBarLabel: 'search',
                    }}
                />
                <Stack.Screen name="ProductList" component={ProductList}
                    options={{
                        tabBarLabel: 'searc1h',
                    }}
                />
            </Tab.Navigator>
        )
    } else {
        return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={initialPath ?? "LoginScreen"}
            >
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="Onboarding" component={Onboarding} />
            </Stack.Navigator>
        )
    }
}

export default AuthNavigation
