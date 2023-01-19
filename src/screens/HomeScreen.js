import { View, FlatList } from 'native-base'
import React, { useState } from 'react'
import CategoryView from '../components/CategoryView';
import ScreenContainer from '../components/ScreenContainer';
import categoryArray from "../assets/data/category"
import FeaturedSection from '../components/FeaturedSection';
import featuredArray from "../assets/data/featured"
import { useDispatch } from 'react-redux';
import { updateShowBottom } from '../redux/scrollSlice';

const HomeScreen = (props) => {
  const dispatch = useDispatch()
  const [scrollState, setScrollState] = useState({
    previous: 0,
    hide: false,
  })

  function _onScroll(event) {
    if (scrollState.previous < event && 150 < event) {
      setScrollState({
        hide: true,
        previous: event,
      });
      dispatch(updateShowBottom(false))
    } else {
      dispatch(updateShowBottom(true))
      if (150 > event) {
        setScrollState({
          hide: false,
          previous: event,
        });
      }
    }
  }

  const renderItem = ({ item, index }) => (
    <FeaturedSection item={item} index={index} />
  )

  const keyExtractor = (item) => item.id;

  return (
    <ScreenContainer
      title={scrollState.hide ? "TRENDING COLLECTION" : "BASICS"}
      leftImage={require("../assets/images/Menu.png")}
      rightImage={require("../assets/images/Bag.png")}
    >
      <View  >
        <FlatList
          ListHeaderComponent={<CategoryView array={categoryArray} />}
          data={featuredArray}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          onScroll={e => _onScroll(e.nativeEvent.contentOffset.y)}
        />
      </View>
    </ScreenContainer>
  )
}

export default HomeScreen