import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header';
import Featured from '../components/Featured';
import SpecialOffer from '../components/SpecialOffer';
import FeaturedCategory from '../components/FeaturedCategory';
import Category from '../components/Category';
import QuickAccess from '../components/QuickAccess';
import Tabs from '../components/Tabs';
import Actions from '../components/Actions';

const HomeScreen = () => {
  // Sample data

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Header />
        <Actions />
        <Tabs />
        {/* Featured Products */}
        <Featured />
        {/* Promo Banner */}
        <SpecialOffer
          title="Apple watch SE"
          description="Order now and enjoy 30% discount"
          image={require('../assets/pngs/watches.png')}
          backgroundColor="#0A0B0F"
        />

        {/* Categories */}
        <Category />

        {/* Quick Access */}
        <QuickAccess />
        <SpecialOffer
          title="Fashion"
          description="Enjoy 30% discount"
          imageBg={require('../assets/pngs/girls.png')}
          titleColor={'#4D281A'}
          descriptionColor={'#75380B'}
          backgroundColor="#FE9C9C38"
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
