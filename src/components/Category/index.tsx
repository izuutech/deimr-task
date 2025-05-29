import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const shirt = require('../../assets/pngs/shirt.png');
const ipad = require('../../assets/pngs/ipad.png');
const food = require('../../assets/pngs/food.png');
const console = require('../../assets/pngs/console.png');

export default function Category() {
  const images = [food, ipad, shirt, console];
  const categories = [
    {
      id: '1',
      name: 'Food',
      items: '3.8k',
      description: 'Explore delicious options',
    },
    {
      id: '2',
      name: 'Electronics',
      items: '2.4k',
      description: 'Discover latest gadgets',
    },
    {id: '3', name: 'Fashion', items: '4.5k', description: 'Trending styles'},
    {id: '4', name: 'Game', items: '1.7k', description: 'Play exciting games'},
  ];

  return (
    <View>
      <View style={styles.categoriesContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity key={category.id} style={styles.categoryCard}>
            <Text style={styles.categoryItems}>{category.items} items</Text>
            <Image source={images[index]} style={styles.image} />
            <Text style={styles.categoryName}>{category.name}</Text>
            <Text style={styles.categoryDescription}>
              {category.description}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
