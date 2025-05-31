import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header';
import Featured from '../components/Featured';
import SpecialOffer from '../components/SpecialOffer';
import FeaturedCategory from '../components/FeaturedCategory';
import Category from '../components/Category';
import QuickAccess from '../components/QuickAccess';
import Tabs from '../components/Tabs';
import Actions from '../components/Actions';
import SearchBox from '../components/SearchBox';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBox />
        <Actions />
        <Tabs />
        {/* Featured Products */}
        <Featured />
        {/* Promo Banner */}
        <SpecialOffer
          offers={[
            {
              title: 'Apple watch SE',
              description: 'Order now and enjoy 30% discount',
              backgroundColor: '#0A0B0F',
              image: require('../assets/pngs/watches.png'),
              specialType: 'Special',
            },
            {
              title: 'Fashion',
              description: 'Enjoy 30% discount',
              imageBg: require('../assets/pngs/girls.png'),
              titleColor: '#4D281A',
              descriptionColor: '#75380B',
              backgroundColor: 'FE9C9C38',
              specialType: 'Special',
            },
            {
              title: 'Cheese Burger',
              description: 'Order now and enjoy 30% discount',
              backgroundColor: '#0A0B0F',
              image: require('../assets/pngs/burger.png'),
              specialType: 'Oven fresh',
              imageStyle: {width: 150, height: 150, top: -75, right: -35},
            },
          ]}
        />

        {/* Categories */}
        <Category />

        {/* Quick Access */}
        <QuickAccess />
        <SpecialOffer
          offers={[
            {
              title: 'Fashion',
              description: 'Enjoy 30% discount',
              imageBg: require('../assets/pngs/girls.png'),
              titleColor: '#4D281A',
              descriptionColor: '#75380B',
              backgroundColor: 'FE9C9C38',
              specialType: 'Special',
            },
          ]}
        />
        {/* Featured Categories */}
        <FeaturedCategory />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 12,
  },
});

export default HomeScreen;
