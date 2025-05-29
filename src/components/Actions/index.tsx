import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {
  BagIcon,
  ClockIcon,
  InfoCircleIcon,
  TimerIcon,
  TruckIcon,
} from '../../assets/svgs';

export default function Actions() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.actionbox}>
        <View style={styles.iconbox}>
          <TimerIcon />
        </View>
        <Text style={styles.text}>Deals</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionbox}>
        <View style={styles.iconbox}>
          <ClockIcon />
        </View>
        <Text style={styles.text}>Recent</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionbox}>
        <View style={styles.iconbox}>
          <TruckIcon />
        </View>
        <Text style={styles.text}>Shipping</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionbox}>
        <View style={styles.iconbox}>
          <BagIcon />
        </View>
        <Text style={styles.text}>Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionbox}>
        <View style={styles.iconbox}>
          <InfoCircleIcon />
        </View>
        <Text style={styles.text}>Help</Text>
      </TouchableOpacity>
    </View>
  );
}
