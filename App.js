import React from "react";
import { NativeBaseProvider, Box, Text, Center, Heading } from "native-base";
import theme from "./src/theme/theme";
import Splash from "./src/screens/Splash";
import Onboarding from "./src/screens/Onboarding";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
     <HomeScreen/>
    </NativeBaseProvider>
  );
}