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

const HomeScreen = () => {
  // Sample data

  const categories = [
    {
      id: '1',
      name: 'Food',
      items: '3.8k',
      description: 'Explore delicious options',
    },
    {id: '2', name: 'Fashion', items: '4.5k', description: 'Trending styles'},
    {
      id: '3',
      name: 'Electronics',
      items: '2.4k',
      description: 'Discover latest gadgets',
    },
    {id: '4', name: 'Game', items: '1.7k', description: 'Play exciting games'},
  ];

  const featuredCategories = [
    {id: '1', name: 'iPhone', tag: 'New products', products: ''},
    {
      id: '2',
      name: 'Macbook',
      tag: 'New technology',
      products: '2312 products',
    },
    {
      id: '3',
      name: 'Fast food',
      tag: 'Free delivery',
      products: '23 restaurants',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Header />

        {/* Featured Products */}
        <Featured />
        {/* Promo Banner */}
        <SpecialOffer />

        {/* Categories */}
        <Text style={styles.sectionTitle}>Categories</Text>
        <View style={styles.categoriesContainer}>
          {categories.map(category => (
            <TouchableOpacity key={category.id} style={styles.categoryCard}>
              <Text style={styles.categoryItems}>{category.items}</Text>
              <Text style={styles.categoryName}>{category.name}</Text>
              <Text style={styles.categoryDescription}>
                {category.description}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

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

        {/* Featured Categories */}
        <View style={styles.featuredHeader}>
          <Text style={styles.sectionTitle}>Featured Categories</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.featuredCategoriesContainer}>
          {featuredCategories.map(category => (
            <TouchableOpacity
              key={category.id}
              style={styles.featuredCategoryCard}>
              <Text style={styles.featuredCategoryName}>{category.name}</Text>
              <Text style={styles.featuredCategoryTag}>{category.tag}</Text>
              {category.products ? (
                <Text style={styles.featuredCategoryProducts}>
                  {category.products}
                </Text>
              ) : null}
            </TouchableOpacity>
          ))}
        </View>
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
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '48%',
    backgroundColor: '#f8f8f8',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  categoryItems: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6200ee',
  },
  categoryName: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
  },
  categoryDescription: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
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
  featuredHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  seeAll: {
    color: '#6200ee',
    fontWeight: '600',
  },
  featuredCategoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  featuredCategoryCard: {
    width: '48%',
    backgroundColor: '#f8f8f8',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  featuredCategoryName: {
    fontSize: 16,
    fontWeight: '600',
  },
  featuredCategoryTag: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  featuredCategoryProducts: {
    fontSize: 12,
    color: '#6200ee',
    marginTop: 8,
    fontWeight: '600',
  },
});

export default HomeScreen;
