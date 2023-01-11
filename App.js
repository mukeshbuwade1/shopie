import React from "react";
import { NativeBaseProvider, Box, Text, Center, Heading } from "native-base";
import theme from "./src/theme/theme";
import Splash from "./src/screens/Splash";
import Onboarding from "./src/screens/Onboarding";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
     <Onboarding/>
    </NativeBaseProvider>
  );
}