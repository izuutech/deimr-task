import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {ArrowRight} from '../../assets/svgs';

export default function FeaturedCategory() {
  const featuredCategories = [
    {
      id: '1',
      name: 'iPhone',
      tag: 'Trending 🔥',
      products: '143 new products',
      image: require('../../assets/pngs/iphone.png'),
    },
    {
      id: '2',
      name: 'Macbook',
      tag: 'New technology',
      products: '2312 products',
      image: require('../../assets/pngs/macbook.png'),
    },
    {
      id: '3',
      name: 'Fast food',
      tag: 'Free delivery 🔥',
      products: '23 restaurants',
      image: require('../../assets/pngs/pizza.png'),
    },
  ];
  return (
    <View>
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
            <View style={styles.imagebox}>
              <Image source={category.image} style={styles.image} />
            </View>
            <View style={styles.detailsbox}>
              <Text style={styles.featuredCategoryName}>{category.name}</Text>
              {category.products ? (
                <Text style={styles.featuredCategoryProducts}>
                  {category.products}
                </Text>
              ) : null}
              <Text style={styles.featuredCategoryTag}>{category.tag}</Text>
            </View>
            <ArrowRight />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
