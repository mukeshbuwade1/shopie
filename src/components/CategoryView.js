import { View, Text, Heading, FlatList, Image, HStack } from 'native-base'
import React from 'react'
import { ImageBackground } from 'react-native';
import { getProportionalFontSize } from '../utilies/methods/CommonMathods'
import Icon from 'react-native-vector-icons/dist/Entypo';
import SectionHeaderView from './SectionHeaderView';

const CategoryView = (props) => {
    const { array } = props;

    const renderItem = ({ item, index }) => (
        <ImageBackground
            source={item.img}
            style={{
                width: 80,
                height: 80,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 20
            }}
        >
            <Text color={"primary.50"}
            // bg={"#0003"}             px={1}
                // borderRadius={4} 
                fontFamily={"NunitoSans-Bold"}
                fontSize={getProportionalFontSize(12)}
                textTransform={"capitalize"}
            >{item.name}</Text>
        </ImageBackground>
    )

    const keyExtractor = (item) => item.id

    return (
        <View my={3}>
            <SectionHeaderView
                title={"categories"}
                iconName ={require("../assets/images/grid.png")}
                px={3}
            />
            {/* <HStack justifyContent={"space-between"} alignItems={"center"} p={3} >
                <Heading
                    textTransform={"uppercase"}
                    fontSize={getProportionalFontSize(15)}
                >categories</Heading>
                <Icon name="grid" color={"#fff"} size={20} />
            </HStack> */}

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