import React from "react";
import { NativeBaseProvider, Box, Text, Center, Heading } from "native-base";
import theme from "./src/theme/theme";
import Splash from "./src/screens/Splash";
import Onboarding from "./src/screens/Onboarding";
import HomeScreen from "./src/screens/HomeScreen";
import ProductDetail from "./src/screens/ProductDetail";
import ProductList from "./src/screens/ProductList";
import RootNavigation from "./src/navigation/RootNavigation";
import 'react-native-gesture-handler';
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Provider store={store} >
        <RootNavigation />
      </Provider>
    </NativeBaseProvider>
  );
}