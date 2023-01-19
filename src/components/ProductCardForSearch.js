import { StyleSheet, } from 'react-native'
import { Image, Text, useColorModeValue, View } from 'native-base'
import React from 'react'
import { getProportionalFontSize } from '../utilies/methods/CommonMathods'
import Icon from 'react-native-vector-icons/dist/Feather';

const ProductCardForSearch = ({ item, index }) => {
    const b_c = useColorModeValue("primary.200", "primary.600",)
    return (
        <View mb={3} flexDirection={"row"}
            borderWidth={1}
            borderColor={b_c}
        >
            <Image source={item.img} alt={"product image"} w={120} h={120} />
            <View p={3} flex={1} justifyContent={"space-between"} >
                <View>
                    <Text
                        fontFamily={"NunitoSans-SemiBold"}
                        fontSize={getProportionalFontSize(15)}
                    >
                        {item.name}
                    </Text>
                    <Text 
                     fontFamily={"NunitoSans-SemiBold"}
                     fontSize={getProportionalFontSize(15)}
                    // style={{ ...styles.tx, ...styles.fSize13, ...styles.fFamilySB, }} 
                    color={"primary.400"}>
                        {item.brand}
                    </Text>
                </View>

                <View flexDirection={"row"} justifyContent={"space-between"}>
                    <Text 
                     fontFamily={"NunitoSans-Bold"}
                     fontSize={getProportionalFontSize(16)}
                    >
                        $ {item.price}
                    </Text>
                    <Icon name={"heart"} size={22} color={"#555"} />
                </View>
            </View>
        </View>
    )
}

export default ProductCardForSearch

const styles = StyleSheet.create({
    tx: {
        textTransform: "capitalize",
        fontFamily: "NunitoSans-Regular",
    },
    fFamilySB: {
        fontFamily: "NunitoSans-SemiBold",
    },
    fSize14: {
        fontSize: getProportionalFontSize(14),
    },
    fSize13: {
        fontSize: getProportionalFontSize(14),
    },
    fSize15: {
        fontSize: getProportionalFontSize(15),
    },
})