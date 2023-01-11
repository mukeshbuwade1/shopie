// import { } from 'react-native'
import React from 'react'
import { View, Text, Pressable, Center } from 'native-base'

const Button = (props) => {
    const { w, minHeight, bg, mt, color,title,borderColor } = props
    return (
        <Pressable
            onPress={() => console.log("hello world")}
        >
            <Center
                w={w ?? "100%"}
                minHeight={minHeight ?? 45}
                bg={bg ?? "primary.50"}
                mt={mt ?? 3}
                borderWidth={1}
                borderColor={borderColor??"primary.50"}
            >
                <Text 
                color={color ?? "primary.900"}
                textTransform={"uppercase"}
                fontFamily={"NunitoSans-Bold"}
                letterSpacing={1}
                >
                    {title}</Text>
            </Center>
        </Pressable>
    )
}

export default Button