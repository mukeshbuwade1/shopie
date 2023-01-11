import { View, Text, Heading, FlatList, Image } from 'native-base'
import React from 'react'
import { ImageBackground } from 'react-native';
import { getProportionalFontSize } from '../utilies/methods/CommonMathods'

const CategoryView = (props) => {
    const { array } = props;

    const renderItem = ({ item, index }) => (
       <ImageBackground 
       source={item.img}
       style={{
        width:80,
        height:80,
        justifyContent:"center",
        alignItems:"center",
        marginLeft : index==0?0:20
       }}
       > 
        <Text>{item.name}</Text>
       </ImageBackground>
    )

    const keyExtractor = (item) => item.id

    return (
        <View>
            <Heading
                textTransform={"uppercase"}
                fontSize={getProportionalFontSize(16)}
            >categories</Heading>
            <FlatList
                data={array}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default CategoryView