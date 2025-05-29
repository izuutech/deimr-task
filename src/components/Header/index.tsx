import {View, TextInput} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

export default function Header() {
  return (
    <View style={styles.mainHeader}>
      <View style={styles.headerTop}>
        <Ionicons name="menu" size={24} color="#000" />
        <View style={styles.headerIcons}>
          <Ionicons
            name="notifications-outline"
            size={24}
            color="#000"
            style={styles.icon}
          />
          <Ionicons name="cart-outline" size={24} color="#000" />
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={20}
          color="#999"
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Search products..."
          style={styles.searchInput}
          placeholderTextColor="#999"
        />
      </View>
    </View>
  );
}
