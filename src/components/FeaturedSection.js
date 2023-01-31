import { View, Text, FlatList, HStack, Heading, Button, Pressable } from 'native-base';
import React, { memo } from 'react';
import { ImageBackground } from 'react-native';
import { getProportionalFontSize } from '../utilies/methods/CommonMathods';
import Icon from 'react-native-vector-icons/dist/Entypo';
import SectionHeaderView from './SectionHeaderView';
import { useDispatch, useSelector } from 'react-redux';
import { updateCartData } from '../redux/cartSlice';

const FeaturedSection = (props) => {
    const { item, index } = props;
    return (
        <View mx={3}>
            {
                index == 0
                    ? <SectionHeaderView
                        title={"trending collection"}
                        iconName={require("../assets/images/grid.png")}
                    />
                    : null
            }
            <ImageBackground
                source={item.img}
                style={{
                    width: "100%",
                    height: 500,
                    marginBottom: 40
                }}
            >
                <Text px={1} color={"primary.50"}
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
        </View>
    )
}

export default memo(FeaturedSection)