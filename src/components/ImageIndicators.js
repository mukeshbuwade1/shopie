import { View, Text, FlatList } from 'native-base'
import React from 'react'

const ImageIndicators = ({ array, active_index }) => {

    const renderItem = ({ item, index }) => (
        <View
            bg={index == active_index ? "primary.50" : "primary.300"}
            w={2}
            h={2}
            borderRadius={10}
            mx={1}
        />
    )

    const keyExtractor = item => item.id


    return (
        <View style={{
            position: "absolute",
            bottom: 10,
        }}>
            <FlatList
                data={array}
                contentContainerStyle={{ width: "100%", justifyContent: "center" }}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                horizontal
            />
        </View>
    )
}

export default ImageIndicators