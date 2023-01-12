import { StyleSheet, } from 'react-native'
import { HStack, Image, Pressable, Text, useColorModeValue, View } from 'native-base'
import Icon from 'react-native-vector-icons/dist/Feather';
// import Icon from 'react-native-vector-icons/dist/Feather';
import React from 'react'
import { getProportionalFontSize } from '../utilies/methods/CommonMathods';

const SectionHeaderView = (props) => {
    const { title ,iconName,iconSize,tintColor,px} = props
    const iconTintColor = useColorModeValue('primary.800', 'primary.50');

    return (
        <HStack justifyContent={"space-between"} alignItems={"center"} mb={3} px={px??0} >
            <Text
                style={{ ...styles.heading, ...styles.fSize17, textTransform: "uppercase" }}
            >{title}</Text>
            {/* <Icon name="minus" color={iconTintColor} size={20} /> */}
            <Pressable>
                <Image source={iconName} alt={"icon for view more"} resizeMode={"contain"}
                    size={iconSize ?? 6} tintColor={tintColor ?? iconTintColor}
                />
            </Pressable>
        </HStack>
    )
}

export default SectionHeaderView

const styles = StyleSheet.create({
    heading: {
        fontFamily: "NunitoSans-Bold",
        textTransform: "capitalize",
    },
    fSize25: {
        fontSize: getProportionalFontSize(25),
    },
    fSize17: {
        fontSize: getProportionalFontSize(15),
    }
})