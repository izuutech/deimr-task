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

const HomeScreen = () => {
  // Sample data

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Header />

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
        <Text style={styles.sectionTitle}>Quick Access</Text>
        <View style={styles.quickAccessContainer}>
          <TouchableOpacity style={styles.quickAccessCard}>
            <Text style={styles.quickAccessTitle}>Quick Swap</Text>
            <Text style={styles.quickAccessText}>Instant exchanges</Text>
            <Text style={styles.newBadge}>New</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAccessCard}>
            <Text style={styles.quickAccessTitle}>Smart Repair</Text>
            <Text style={styles.quickAccessText}>Easy fixes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAccessCard}>
            <Text style={styles.quickAccessTitle}>Fashion</Text>
            <Text style={styles.quickAccessText}>Enjoy 30% discount</Text>
          </TouchableOpacity>
        </View>
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

  quickAccessContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  quickAccessCard: {
    width: '31%',
    backgroundColor: '#f8f8f8',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  quickAccessTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  quickAccessText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  newBadge: {
    fontSize: 10,
    color: '#6200ee',
    marginTop: 4,
  },
});

export default HomeScreen;
