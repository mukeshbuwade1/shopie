import { StyleSheet, } from 'react-native'
import React from 'react'
import { Box, Image, Text, View } from 'native-base'
import { getProportionalFontSize } from '../utilies/methods/CommonMathods'

const RenderItemForProductList = ({ item, index }) => {
    return (
        // <Box>
        <View mx={3}  w={180}   >
            <Image source={item.img} alt={"product image"} w={180} h={180} />
            <Text style={{...styles.tx, ...styles.fSize14}} >
                {item.name}
            </Text>
            <Text style={{...styles.tx,...styles.fSize13,...styles.fFamilySB,}} color={"primary.400"}>
                {item.brand}
            </Text>
            <Text style={{...styles.tx,...styles.fSize15}}>
                $ {item.price}
            </Text>
        </View>
        // </Box>
    )
}

export default RenderItemForProductList

const styles = StyleSheet.create({
    tx: {
        textTransform: "capitalize",
        fontFamily: "NunitoSans-Regular",
    },
    fFamilySB:{
        fontFamily: "NunitoSans-SemiBold",
    },
    fSize14:{
        fontSize: getProportionalFontSize(14),
    },
    fSize13:{
        fontSize: getProportionalFontSize(14),
    },
    fSize15:{
        fontSize: getProportionalFontSize(15),
    },
})