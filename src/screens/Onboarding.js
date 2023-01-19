import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Dimensions, SafeAreaView } from 'react-native'
import { View, Text, FlatList, Image, Box, Center, useColorModeValue } from 'native-base'
import data from "../assets/data/onboarding"
import { getProportionalFontSize } from '../utilies/methods/CommonMathods';
import ImageIndicators from "../components/ImageIndicators"
import Button from '../components/Button';
import { CommonActions } from '@react-navigation/native';
const { width, height } = Dimensions.get("window");

const Onboarding = (props) => {
    const [index, setIndex] = useState(0);
    const indexRef = useRef(index);
    indexRef.current = index;

    const btnBg = useColorModeValue('primary.50', 'primary.800');
    const btnColor = useColorModeValue('primary.800', 'primary.50');

    const onScroll = useCallback((event) => {
        const slideSize = event.nativeEvent.layoutMeasurement.width;
        const index = event.nativeEvent.contentOffset.x / slideSize;
        const roundIndex = Math.round(index);

        const distance = Math.abs(roundIndex - index);

        const isNoMansLand = 0.4 < distance;

        if (roundIndex !== indexRef.current && !isNoMansLand) {
            setIndex(roundIndex);
        }
    }, []);

    const renderItem = ({ item }) => {
        return (
            <View w={width} h={"100%"}>
                <Image source={item.img} alt={"image"} w={'full'} h={'full'} />
            </View>
        )
    }

    const keyExtractor = item => item.id

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Box flex={1} >
                {/* image container or slide view--------------  */}
                <View flex={4}  >
                    <View h={"80%"}>
                        <FlatList
                            data={data}
                            renderItem={renderItem}
                            keyExtractor={keyExtractor}
                            horizontal
                            pagingEnabled
                            onScroll={onScroll}
                            showsHorizontalScrollIndicator={false}
                        />
                        <ImageIndicators array={data} active_index={index} />
                    </View>
                    <Center h={"20%"}  >
                        <Text fontFamily={"NunitoSans-Bold"} textTransform={"uppercase"}
                            fontSize={getProportionalFontSize(20)} mb={2} letterSpacing={1}
                        >
                            {data[index].title}</Text>
                        <Text
                            fontSize={getProportionalFontSize(14)}
                            w={"80%"}
                            textAlign={"center"} letterSpacing={0.5}
                        >{data[index].description}</Text>
                    </Center>
                </View>

                {/* button container --------------------------- */}
                <View flex={1} px={10}                >
                    <Button
                        title={"register"}
                        onPress={()=>alert("screen is under construction")}
                    />
                    <Button
                        // w, minHeight, bg, mt, color,
                        bg={btnBg}
                        color={btnColor}
                        title={"log in"}
                        onPress={()=>props.navigation.dispatch(
                            CommonActions.reset({
                                index:0,
                                routes:[{name:"LoginScreen"}]
                            })
                        )}
                    />
                </View>
            </Box>
        </SafeAreaView>
    )
}

export default Onboarding