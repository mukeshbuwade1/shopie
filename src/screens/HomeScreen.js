import { View, Text, Box, HStack, Image, Heading, Pressable } from 'native-base'
import React from 'react'
import { SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import CategoryView from '../components/CategoryView';
import ScreenContainer from '../components/ScreenContainer';
import categoryArray from "../assets/data/category"


const HomeScreen = (props) => {
  const {title} =props
  return (
   <ScreenContainer title={"BASICS"} >

    <CategoryView array= {categoryArray} />

   </ScreenContainer>
  )
}

export default HomeScreen