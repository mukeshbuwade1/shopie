import { Dimensions, StyleSheet,  } from 'react-native';
import { Center, Text, View } from "native-base"
import React from 'react'
import Lottie from 'lottie-react-native';
const {width, height} = Dimensions.get("window")
const Loader = () => {
  return (
    <Center w={width} h={height} position={"absolute"} zIndex={99} 
    _dark={{bg:"#000c"}} _light={{bg:"#000c"}}
    >
     <Lottie source={require('../assets/images/vLineLoader.json')} autoPlay loop  
     style={{
        width:100,
        height:100,
        // borderWidth:2
     }}
     />
    </Center>
  )
}

export default Loader
