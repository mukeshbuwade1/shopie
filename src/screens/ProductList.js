import { FlatList, ScrollView, Text, View } from 'native-base'
import { ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import ScreenContainer from '../components/ScreenContainer'
import { getProportionalFontSize } from '../utilies/methods/CommonMathods'
import SectionHeaderView from '../components/SectionHeaderView'
import array from "../assets/data/productList";
import RenderItemForProductList from '../components/RenderItemForProductList'

const ProductList = () => {
    const renderItem = ({ item, index }) => <RenderItemForProductList item={item} index={index} />
    const keyExtractor = (item) => item.id;

    return (
        <ScreenContainer
            title={"BASICS"}
            leftImage={require("../assets/images/Menu.png")}
            rightImage={require("../assets/images/Bag.png")}
        >
            <ScrollView>
                <View w={"100%"} px={3}>
                    <ImageBackground
                        source={require("../assets/images/showCase.png")}
                        style={{
                            width: "100%",
                            height: 100,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Text style={{ ...styles.tx, fontFamily: "NunitoSans-Bold", }}   >
                            {"basics summer sale"}
                        </Text>
                        <Text style={{ ...styles.tx, fontFamily: "NunitoSans-Regular", }}  >
                            {"march 10 - 15"}
                        </Text>
                    </ImageBackground>
                </View>
                <View>
                    <SectionHeaderView
                        title={"twenty21"}
                        iconName={require("../assets/images/back_arrow.png")}
                        iconSize={4}
                        px={3}
                        mt={4}
                    />
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={array.filter(e=>e?.tag?.includes("twenty21"))}
                        keyExtractor={keyExtractor}
                        renderItem={renderItem}
                    />
                </View>

                <View mt={3}>
                    <SectionHeaderView
                        title={"spring essentials"}
                        iconName={require("../assets/images/back_arrow.png")}
                        iconSize={4}
                        px={3}
                        mt={4}
                    />
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={array.filter(e=>e?.tag?.includes("spring_essential"))}
                        keyExtractor={keyExtractor}
                        renderItem={renderItem}
                    />
                </View>

                <View mt={3} mb={5}>
                    <SectionHeaderView
                        title={"denim"}
                        iconName={require("../assets/images/back_arrow.png")}
                        iconSize={4}
                        px={3}
                        mt={4}
                    />
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={array.filter(e=>e?.tag?.includes("denim"))}
                        keyExtractor={keyExtractor}
                        renderItem={renderItem}
                    />
                </View>

            </ScrollView>
        </ScreenContainer>
    )
}

export default ProductList

const styles = StyleSheet.create({
    tx: {
        color: "#fff",
        fontSize: getProportionalFontSize(20),
        textTransform: "capitalize",
        letterSpacing: 1,
        lineHeight: 30
    }
})