import { View, Text, Image, Heading, HStack, ScrollView, useColorModeValue } from 'native-base'
import React from 'react'
import { StyleSheet } from 'react-native'
import ScreenContainer from '../components/ScreenContainer'
import { getProportionalFontSize } from '../utilies/methods/CommonMathods';
import Icon from 'react-native-vector-icons/dist/Feather';
import Button from '../components/Button';
import SectionHeaderView from '../components/SectionHeaderView';


const ProductDetail = () => {
  const btnBg = useColorModeValue('primary.50', 'primary.800');
  const btnColor = useColorModeValue('primary.800', 'primary.50');
  const border4btnBox = useColorModeValue('primary.100', 'primary.700');

  return (
    <ScreenContainer
      leftImage={require("../assets/images/Back.png")}
      rightImage={require("../assets/images/Share.png")}
      tintColor={"primary.50"}
      iconSize={5}
      boxStyle={{
        position: "absolute",
        width: "100%",
        zIndex: 99,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false} flex={1} contentContainerStyle={{ paddingBottom: 100 }}>
        <Image source={require("../assets/images/girl_jacket.png")} alt={"product image"}
          w={"100%"}
        />
        {/* title and price  */}
        <HStack p={3}
          justifyContent={"space-between"}
          w={"100%"}
        >
          <Text
            style={{ ...styles.heading, ...styles.fSize25, width: "70%", lineHeight: 28, }}
          >oversized Denim Jacket</Text>
          <Text
            style={{ ...styles.heading, ...styles.fSize25, lineHeight: 31, }} >$97.99</Text>
        </HStack>

        {/* description  */}
        <View p={3}
          w={"100%"}>
          <SectionHeaderView
            title={"description"}
            iconName={require("../assets/images/minus.png")}
            iconSize={5}
          />
          <Text>
            Straight cut shirt jacket in sturdy, washed denim. Features a pointed collar and buttons down the front. Dropped shoulders and long sleeves with button cuffs. Detachable tie belt at the waist and a rounded hem.
          </Text>
        </View>

      </ScrollView>
      {/* bottom buttons  */}
      <View w={"100%"}
        position={"absolute"}
        left={0}
        bottom={0}

      >
        <HStack
          borderTopColor={border4btnBox}
          borderTopWidth={2}
          px={3}
          py={6}
          justifyContent={"space-between"}
          w={"100%"}
        >
          <Button
            // w, minHeight, bg, mt, color,title,borderColor
            title={"wishlist"}
            w={"49%"}
            bg={btnBg}
            color={btnColor}
            mt={0}
          />
          <Button
            title={"add to bag"}
            w={"49%"}
            mt={0}
          />
        </HStack>
      </View>
    </ScreenContainer>
  )
}

export default ProductDetail
const styles = StyleSheet.create({
  heading: {
    fontFamily: "NunitoSans-SemiBold",
    textTransform: "capitalize",
  },
  fSize25: {
    fontSize: getProportionalFontSize(25),
  },
  fSize17: {
    fontSize: getProportionalFontSize(15),
  }
})