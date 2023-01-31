import React from "react";
import { NativeBaseProvider, Box, Text, Center, Heading } from "native-base";
import theme from "./src/theme/theme";
import RootNavigation from "./src/navigation/RootNavigation";
import 'react-native-gesture-handler';
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { Root } from 'popup-ui'

export default function App() {
  return (
    <Root>
      <NativeBaseProvider theme={theme}>
        <Provider store={store} >
          <RootNavigation />
        </Provider>
      </NativeBaseProvider>
    </Root>
  );
}