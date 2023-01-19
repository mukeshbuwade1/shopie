import { Input, Text, View } from 'native-base'
import { StyleSheet } from 'react-native'
import React from 'react'
import { getProportionalFontSize } from '../utilies/methods/CommonMathods'
import Icon from 'react-native-vector-icons/dist/Ionicons';
const SearchBar = () => {
    return (
        <Input
        mx={3}
            placeholder='SEARCH PRODUCT'
            variant="underlined"
            fontSize={getProportionalFontSize(15)}
            fontFamily={"NunitoSans-Regular"}
            InputRightElement={
                <Icon name={"filter"} size={20} color={"#555"} />
            }
        />
    )
}

export default SearchBar

const styles = StyleSheet.create({})