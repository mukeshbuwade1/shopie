// import { } from 'react-native'
import React from 'react'
import { View, Text, Pressable, Center } from 'native-base'

const Button = (props) => {
    const { w, minHeight, bg, mt, color, title, borderColor } = props
    return (
        <Pressable
            onPress={() => console.log("hello world")}
            w={w ?? "100%"}
        >
            <Center
                w={"100%"}
                minHeight={minHeight ?? 45}
                // bg={bg ?? "primary.50"}
                mt={mt ?? 3}
                borderWidth={1}
                borderColor={borderColor ?? "primary.50"}

                _light={{ bg: bg ?? "primary.900", borderColor: borderColor ?? "primary.900" }}
                _dark={{ bg: bg ?? "primary.50", borderColor: borderColor ?? "primary.50" }}
            >
                <Text

                    _light={{ color: color ?? "primary.50" }}
                    _dark={{ color: color ?? "primary.900" }}
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