import {View, TextInput, Text, Image} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {SearchIcon} from '../../assets/svgs';

export default function Header() {
  return (
    <View style={styles.mainHeader}>
      <View style={styles.userbox}>
        <View style={styles.imagebox}>
          <Image
            source={require('../../assets/pngs/profile.png')}
            style={styles.image}
          />
        </View>
        <Text style={styles.greeting}>Hello, Chidinma</Text>
      </View>
    </View>
  );
}
