import { View, Text, FlatList, HStack, Heading } from 'native-base'
import React from 'react'
import { ImageBackground } from 'react-native';
import { getProportionalFontSize } from '../utilies/methods/CommonMathods';
import Icon from 'react-native-vector-icons/dist/Entypo';

const FeaturedSection = (props) => {

    const { array } = props;

    const renderItem = ({ item, index }) => (
        <ImageBackground
            source={item.img}
            style={{
                width: "100%",
                height: 500,               
                marginBottom: 40
            }}
        >
            <Text  px={1}
                fontFamily={"Halant-SemiBold"}
                fontSize={getProportionalFontSize(35)}
                textTransform={"capitalize"}
                position={"absolute"}
                bottom={3}
                left={3}
                w={"70%"}
                letterSpacing={1}
                lineHeight={41}
            >{item.title}</Text>
        </ImageBackground>
    )

    const keyExtractor = (item) => item.id
    return (
        <View my={3}  >
             <HStack justifyContent={"space-between"} alignItems={"center"} p={3} >
                <Heading
                    textTransform={"uppercase"}
                    fontSize={getProportionalFontSize(15)}
                >trending collections</Heading>
                <Icon name="grid" color={"#fff"} size={20} />
            </HStack>
            <FlatList
                contentContainerStyle={{ marginHorizontal: 20,paddingBottom:350 }}
                data={array}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default FeaturedSection