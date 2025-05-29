import {View, TextInput, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';

export default function SpecialOffer() {
  return (
    <View style={styles.promoBanner}>
      <View>
        <View style={styles.specialbox}>
          <Text style={styles.special}>Special</Text>
        </View>
        <Text style={styles.promoTitle}>Apple watch SE</Text>
        <Text style={styles.promoText}>Order now and enjoy 30% discount</Text>
      </View>
      <View>
        <Image
          source={require('../../assets/pngs/watches.png')}
          style={styles.image}
        />
      </View>
    </View>
  );
}
