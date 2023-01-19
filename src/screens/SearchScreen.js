import { StyleSheet } from 'react-native'
import { FlatList, Text, useColorModeValue, View } from 'native-base'
import React from 'react'
import ScreenContainer from '../components/ScreenContainer'
import SearchBar from '../components/SearchBar'
import { getProportionalFontSize } from '../utilies/methods/CommonMathods'
import array from "../assets/data/productList";
import ProductCardForSearch from '../components/ProductCardForSearch'
const filter = [
  "All", "top", "pants", "sweatshirt", "jackets", "kids wear"
]

const SearchScreen = () => {
  const b_c = useColorModeValue("primary.200", "primary.50")
  const t_c = useColorModeValue("primary.700", "primary.50")
  const renderItem = ({ item, index }) => (
    <View
      borderWidth={1}
      borderColor={b_c}
      marginRight={3}
      marginLeft={index == 0 ? 3 : 0}
      py={1}
      px={3}
      maxHeight={40}
    >
      <Text
        color={t_c}
        fontSize={getProportionalFontSize(14)}
        textTransform={"capitalize"}
        fontFamily={"NunitoSans-SemiBold"}
      >{item}</Text>
    </View>
  )

  const keyExtractor = (item) => item.id;

  const renderProductItem = ({ item, index }) => {
    return <ProductCardForSearch item={item} index={index} />
  }

  //component render
  return (
    <ScreenContainer
      title={"BASICS"}
      leftImage={require("../assets/images/Menu.png")}
      rightImage={require("../assets/images/Bag.png")}
    >
      {/* <View  > */}

      <SearchBar />

      <FlatList
        contentContainerStyle={{
          marginTop: 10,
          pl: 10
        }}
        horizontal={true}
        data={filter}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
      />
      {/* <View>
           */}

      <FlatList
        ListHeaderComponent={() => (
          <View mt={3} mb={1}  w={"full"} flexDirection={"row"} justifyContent={"space-between"} >
            <Text>Search Results For<Text fontFamily={"NunitoSans-SemiBold"} > "jackets"</Text></Text>
            <Text>15 Results</Text>
          </View>
        )}
        contentContainerStyle={{
          paddingHorizontal: 12,
          // height:500
        }}
        // horizontal={true}
        data={array}
        renderItem={renderProductItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
      />

      {/* </View> */}




      {/* </View> */}
    </ScreenContainer>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})