import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import AuthNavigation from './AuthNavigation';
import Onboarding from '../screens/Onboarding';

const Stack = createNativeStackNavigator();
const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={"Splash"}
            >
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Onboarding" component={Onboarding} />
                <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation