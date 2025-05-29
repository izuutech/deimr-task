import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import styles from './styles';

export default function Featured() {
  const image1 = require('../../assets/pngs/pasta.png');
  const featuredProducts = [
    {
      id: '1',
      name: 'Alfredo Pasta',
      price: '$340',
      image: require('../../assets/pngs/pasta.png'),
    },
    {
      id: '2',
      name: 'Nike Air Mix',
      price: '$340',
      image: require('../../assets/pngs/shoe.png'),
    },
    {
      id: '3',
      name: 'Nike Air Mix',
      price: '$340',
      image: require('../../assets/pngs/tv.png'),
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Featured Products</Text>
        <Text style={styles.headerSubtitle}>
          Discover top picks across categories
        </Text>
      </View>
      <FlatList
        horizontal
        data={featuredProducts}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.productCard}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.textbox}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
            </View>
          </View>
        )}
        contentContainerStyle={styles.productsContainer}
      />
    </View>
  );
}
