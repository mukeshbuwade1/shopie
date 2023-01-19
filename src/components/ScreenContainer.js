import { View, Text, Box, HStack, Image, Heading, Pressable, useColorModeValue } from 'native-base'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { getProportionalFontSize } from '../utilies/methods/CommonMathods'

const ScreenContainer = (props) => {
    const { title, leftImage, rightImage, boxStyle, iconSize, tintColor ,shrink} = props;
    const iconTintColor = useColorModeValue('primary.800', 'primary.50');
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Box flex={1} >
                <HStack
                    px={"3"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    my={5}
                    bg={"#0000"}
                    style={boxStyle}
                >
                    {/* left icon button */}
                    <Pressable>
                        <Image source={leftImage} alt={"left icon or menu bar option image"} resizeMode={"contain"}
                            size={iconSize ?? 6} tintColor={tintColor ?? iconTintColor}
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
                        <Image source={rightImage} alt={"left icon or menu bar option image"} resizeMode={"contain"}
                            size={iconSize ?? 6}
                            tintColor={tintColor ?? iconTintColor}
                        />
                    </Pressable>
                </HStack>
                <View flex={1}  >
                    {props.children}
                </View>
            </Box>
        </SafeAreaView>
    )
}

export default ScreenContainer