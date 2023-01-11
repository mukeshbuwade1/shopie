import { View, Text, Box, HStack, Image, Heading, Pressable } from 'native-base'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { getProportionalFontSize } from '../utilies/methods/CommonMathods'

const ScreenContainer = (props) => {
    const { title } = props
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Box flex={1} py={5} px={"3"}>
               
                <HStack
                    alignItems={"center"}
                    justifyContent={"space-between"}
                >
                    {/* left icon button */}
                    <Pressable>
                        <Image source={require("../assets/images/Menu.png")} alt={"left icon or menu bar option image"}
                            size={6}
                        />
                    </Pressable>

                    {/* title */}
                    <Heading
                        fontSize={getProportionalFontSize(16)}
                        letterSpacing={2}
                        fontFamily={"NunitoSans-SemiBold"}
                    >{title}</Heading>

                    {/* right icon button */}
                    <Pressable>
                        <Image source={require("../assets/images/Bag.png")} alt={"left icon or menu bar option image"}
                            size={6}
                            tintColor={"primary.50"}
                        />
                    </Pressable>
                </HStack>
                <View>
                    {props.children}
                </View>
            </Box>
        </SafeAreaView>
    )
}

export default ScreenContainer