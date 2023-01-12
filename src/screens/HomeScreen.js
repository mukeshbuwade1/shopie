import { View, Text, Box, HStack, Image, Heading, Pressable } from 'native-base'
import React from 'react'
import { SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import CategoryView from '../components/CategoryView';
import ScreenContainer from '../components/ScreenContainer';
import categoryArray from "../assets/data/category"
import FeaturedSection from '../components/FeaturedSection';
import featuredArray from "../assets/data/featured"

const HomeScreen = (props) => {
  const { title } = props
  return (
    <ScreenContainer 
    title={"BASICS"}
    leftImage={require("../assets/images/Menu.png")}
    rightImage={require("../assets/images/Bag.png")}
     >

      <CategoryView array={categoryArray} />

      <FeaturedSection array={featuredArray} />

    </ScreenContainer>
  )
}

export default HomeScreen